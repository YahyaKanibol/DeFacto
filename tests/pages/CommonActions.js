const { expect } = require('playwright/test')
const Constants = require('../../constants/Constants')
const CommonUtil = require('../support/utils/CommonUtil')
const DateUtil = require('../support/utils/DateUtil')
const path = require('path')

let lastThreeElements = []

class CommonActions {
    constructor() {
        this.storedText = {}; // Ürün adını saklamak için
    }
    async setContext(projectName) {
        switch (projectName) {
            case 'Normal':
                this.context = global.page
                this.projectName = projectName
                this.titleXpath = ''
                break
            case 'Iframe':
                this.projectName = projectName
                this.context = page.mainFrame().childFrames()[0]
                this.titleXpath = ''
                break
            default:
                this.context = global.page
                this.projectName = 'Normal'
                this.titleXpath = ''
                break
        }
    }

    async setContextAsTitle(title) {
        if (title !== '') {
            let titleXpath = await Constants.getVariable(title)
            this.titleXpath = titleXpath
        } else {
            this.titleXpath = null
        }
    }

    async getXpath(key, ...args) {
        let value = await Constants.getVariable(key, ...args) // args burada yayılıyor
        if (this.titleXpath && value) {
            // Eğer value içindeki metin "|" var ise
            if (value.includes('|')) {
                // Metni "|" ile parçala
                const parts = value.split('|')

                // Her bir parçayı işleyerek yeni bir dizi oluştur
                const modifiedParts = parts.map((part) => {
                    return part.replace(/^(.*?)(\/\/)/, `(${this.titleXpath}//`)
                })

                // Değiştirilmiş parçaları "|" ile birleştir
                value = modifiedParts.join('|')
            } else {
                // "|" yoksa, doğrudan ${this.titleXpath}// ile ilk "//" ifadesini değiştir
                value = value.replace(/^(.*?)(\/\/)/, `(${this.titleXpath}//`)
            }
        }
        this.trackElementInteraction(value)
        return value
    }

    async trackElementInteraction(locator) {
        // Place the incoming element at the beginning of the tracking array
        lastThreeElements.unshift(locator)

        // Assign border styles to existing elements based on their position in the tracking array
        for (const [index, locator] of lastThreeElements.entries()) {
            try {
                let el = await this.context.locator(locator).first()
                let count = await el.count()

                if (count > 0) {
                    if (index === 0 && (await el.isVisible())) {
                        await el.evaluate((el) => (el.style.border = '2px solid green'))
                    } else if (index === 1 && (await el.isVisible())) {
                        await el.evaluate((el) => (el.style.border = '2px solid orange'))
                    } else if (index === 2 && (await el.isVisible())) {
                        await el.evaluate((el) => (el.style.border = '2px solid red'))
                    }
                }
            } catch (error) {
                console.error(`Error interacting with element at index ${index}:`, error)
            }
        }

        // Manage the tracking array if its length exceeds 3
        if (lastThreeElements.length > 3) {
            const removedLocator = lastThreeElements.pop()
            try {
                let removedElement = await this.context.locator(removedLocator).first()
                let count = await removedElement.count()
                if (count > 0 && (await removedElement.isVisible())) {
                    await removedElement.evaluate((el) => (el.style.border = '')) // Optionally remove the border
                }
            } catch (error) {
                console.error(`Error removing border from removed element:`, error)
            }
        }
    }

    async debounceDomLog(pollDelay = 5, stableDelay = 50) {
        let markupPrevious = ''
        const timerStart = new Date()
        let isStable = false
        let counter = 0
        while (!isStable) {
            ++counter
            console.log('-----\nattempt: ', counter)
            const markupCurrent = await this.context.evaluate(() => document.body.innerHTML)
            const elapsed = new Date().getTime() - timerStart.getTime()
            if (markupCurrent == markupPrevious) {
                isStable = stableDelay <= elapsed
                if (!isStable) {
                    console.log('size is stable! Still polling... (Reason: delay not elapsed yet)')
                    console.log('this attempt size: ', markupCurrent.length)
                } else {
                    console.log('size settled and time elapsed')
                    console.log('this attempt size: ', markupCurrent.length)
                }
            } else {
                console.log('this attempt size: ', markupPrevious.length)
                markupPrevious = markupCurrent
            }
            if (!isStable) {
                console.log('waiting for poll delay: ', pollDelay)
                await new Promise((resolve) => setTimeout(resolve, pollDelay))
            }
            console.log('elapsed: ', elapsed)
        }
    }

    async debounceDom(pollDelay = 20, stableDelay = 200) {
        let markupPrevious = ''
        const timerStart = new Date()
        let isStable = false
        while (!isStable) {
            const markupCurrent = await this.context.evaluate(() => document.body.innerHTML)
            if (markupCurrent == markupPrevious) {
                const elapsed = new Date().getTime() - timerStart.getTime()
                isStable = stableDelay <= elapsed
            } else {
                markupPrevious = markupCurrent
            }
            if (!isStable) await new Promise((resolve) => setTimeout(resolve, pollDelay))
        }
    }

    async waitForLoadingMask() {
        await this.context.waitForLoadState('domcontentloaded')
        await this.context.waitForLoadState('load')

        // await this.context.waitForLoadState('networkidle')
        // const element1 = await Constants.getVariable('LOADING_MASK_SELECTOR')
        // const element2 = await Constants.getVariable('LOADING_MASK_SELECTOR2')
        // const element3 = await Constants.getVariable('LOADING_MASK_SELECTOR3')
        // const element4 = await Constants.getVariable('LOADING_MASK_SELECTOR4')
        // await this.context.waitForSelector(element1, { state: 'hidden' })
        // await this.context.waitForSelector(element2, { state: 'hidden' })
        // await this.context.waitForSelector(element3, { state: 'hidden' })
        // await this.context.waitForSelector(element4, { state: 'hidden' })

        await this.context.waitForLoadState('domcontentloaded')
        await this.context.waitForLoadState('load')
    }

    async _click(locator) {
        await this.waitForLoadingMask()
        const element = await this.context.locator(locator)
        await element.waitFor({ state: 'visible' })
        await element.waitFor({ state: 'attached' })
        await element.click({ force: true })
    }

    async _rightClick(locator) {
        await this.waitForLoadingMask()
        const element = await this.context.locator(locator)
        await element.waitFor({ state: 'visible' })
        await element.waitFor({ state: 'attached' })
        await element.click({ force: true, button: 'right' })
        await this.waitForLoadingMask()
    }

    async _dblclick(locator) {
        await this.waitForLoadingMask()
        const element = await this.context.locator(locator)
        await element.waitFor({ state: 'visible' })
        await element.waitFor({ state: 'attached' })
        await element.dblclick({ force: true })
        await this.waitForLoadingMask()
    }

    async _type(locator, text) {
        await this.waitForLoadingMask()
        let element = await this.context.locator(locator).first()

        if (locator.includes('iframe')) {
            const iframeElement = await element.contentFrame() 
            const bodyElement = await iframeElement.locator('body') 
            await bodyElement.waitFor({ state: 'visible' }) 
            await bodyElement.fill(text, { force: true }) 
        } else {
            await element.waitFor({ state: 'visible' })
            await element.waitFor({ state: 'attached' })
            
            // Input type'ını kontrol et
            const inputType = await element.evaluate(el => el.type)
            
            if (inputType === 'number' || inputType === 'tel') {
                // Number ve tel tipleri için type() metodunu kullan
                await element.clear({ force: true })
                await element.type(text, { force: true })
            } else {
                // Diğer tipler için fill() metodunu kullan
                await element.clear({ force: true })
                await element.fill(text, { force: true })
            }
        }
        await this.waitForLoadingMask()
    }

    async _selectValue(pageElementLocator, value) {
        await this._click(pageElementLocator)
        await this.waitForLoadingMask()
        const valueElement = `(//*[text()="${value}"])[last()]`
        await this._click(valueElement)
        await this.waitForLoadingMask()
    }

    async _waitForAndTakeAction(waitForXpath, externalMethod, timeout = 1500) {
        const element = await this.context.locator(waitForXpath)
        try {
            await element.waitFor({ state: 'visible', timeout: timeout })
            console.log('Element visible =>' + waitForXpath)
            if ((await element.count()) > 0) {
                await externalMethod()
                return true
            } else {
                console.log('Element not exist => ' + waitForXpath)
            }
        } catch (error) {
            // console.log('Element not visible within timeout => ' + waitForXpath)
        }
        return false
    }
    async butonaTiklaTekilIslev(button) {
        console.log(button + ' butonuna tiklandi');
        await this.waitForLoadingMask();
        const controlIndexes = ['last()', 'last()-1', '1'];
        let buttonFound = false;

        // Link elementleri için kontrol
        const linkXPath = `//a[contains(text(),'${button}') or @title='${button}']`;
        const linkEl = this.context.locator(linkXPath);
        
        if (await linkEl.isVisible().catch(() => false)) {
            await this._click(linkXPath);
            buttonFound = true;
        } else {
            // Mevcut span elementi kontrolü
            for (const index of controlIndexes) {
                const buttonXPath = `(//span[text()='${button}'])[${index}]`;
                const el = this.context.locator(buttonXPath);
                
                if (await el.isVisible().catch(() => false)) {
                    await this._click(buttonXPath);
                    buttonFound = true;
                    break;
                }
            }
        }

        if (!buttonFound) {
            throw new Error(`${button} butonu bulunamadı`);
        }
    }

    async clickButtonAndSetContextToNewTab(button) {
        await this.waitForLoadingMask()
        const pagePromise = Promise.race([this.context.waitForEvent('popup'), this.context.waitForEvent('page')])
        await this.butonaTiklaTekilIslev(button)
        const newPage = await pagePromise
        this.firstTab = this.context
        this.context = newPage
    }

    async clickButtonAndSetContextToNewSideTab(button) {
        try {
            await this.waitForLoadingMask()

            // Butona tıklamadan önce yeni bir sekme açılmasını bekleyen event tanımlaması yap
            const [newPage] = await Promise.all([
                this.context.waitForEvent('page'), // Yeni sekme olayını bekler
                this.butonaTiklaTekilIslev(button) // Butona tıklamayı tetikler
            ])

            // Yeni sekmenin yüklendiğinden emin ol
            await newPage.waitForLoadState('domcontentloaded') // Sayfanın yüklenmesini bekle

            // Yeni sekmeyi aktif hale getir
            this.firstTab = this.context // Mevcut sekmeyi kaydet
            this.context = newPage // Yeni sekmeyi context olarak ata
            await newPage.bringToFront() // Yeni sekmeyi öne getir

            console.log('Yeni sekmeye geçiş yapıldı ve aktif hale getirildi.')
        } catch (error) {
            console.error('Yeni sekmeye geçişte hata oluştu:', error)
            throw error
        }
    }

    async closeTabAndSetContextToFirstTab() {
        await this.waitForLoadingMask()
        await this.context.close()
        this.context = this.firstTab
    }

    async butonuGorunurseTiklanir(button) {
        await this.waitForLoadingMask()
        const buttonLocator = await this.getXpath('BUTTON', button, 'last()')
        const buttonElement = await this.context.locator(buttonLocator, { timeout: 3000 })
        if (await buttonElement.isVisible()) {
            await buttonElement.click({ force: true })
        } else {
            console.log('element not exist')
        }
    }
 // Belirli bir elementi kaydırma
 async scrollElement(xpathKey, scrollAmount) {
    await this.waitForLoadingMask();
    const elementLocator = await this.getXpath('', xpathKey, 'last()'); 
    const element = await this.context.locator(elementLocator, { timeout: 3000 });

    if (await element.isVisible()) {
        await element.evaluate((el, scrollAmount) => {
            el.scrollTop += scrollAmount;
        }, scrollAmount);
        console.log(`Element içinde ${scrollAmount} piksel aşağı kaydırıldı.`);
    } else {
        console.log("Element bulunamadı.");
    }
}
    async isButtonActive(button) {
        await this.waitForLoadingMask()

        const buttonLocator = await this.getXpath('BUTTON', button, 'last()')
        const buttonElement = await this.context.locator(buttonLocator, { timeout: 3000 })

        console.log(`(${buttonElement}.)[not(contains(@class, 'x-btn-disabled'))]`)
        await this.context.waitForSelector(`(${buttonElement}.)[not(contains(@class, 'x-btn-disabled'))]`)
        console.log(`(${buttonElement}.)[not(contains(@class, 'x-btn-disabled'))]`)
    }

    async isButtonDeactive(button) {
        await this.waitForLoadingMask()

        const buttonLocator = await this.getXpath('BUTTON', button, 'last()')
        const buttonElement = await this.context.locator(buttonLocator, { timeout: 3000 })

        console.log(`(${buttonElement}.)[contains(@class, 'x-btn-disabled')]`)
        await this.context.waitForSelector(`(${buttonElement}.)[contains(@class, 'x-btn-disabled')]`)
        console.log(`(${buttonElement}.)[contains(@class, 'x-btn-disabled')]`)
    }

    async navigateTo(urlKey) {
        await this.context.goto(this.getXpath(urlKey), { timeout: 120000 })
    }

    async waitSecond(second) {
        await this.context.waitForTimeout(second * 1000)
    }

    async clickElement(path) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        await this._click(element)
    }

    async dblClickElement(path) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        await this._dblclick(element)
    }

    async rightClickElement(path) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        await this._rightClick(element)
    }

    async clickElementIfExist(path) {
        await this.waitForLoadingMask()
        const locator = await this.getXpath(path)
        await this._waitForAndTakeAction(locator, async () => {
            await this._click(locator)
        })
    }

    async dblClickElementIfExist(path) {
        await this.waitForLoadingMask()
        const locator = await this.getXpath(path)
        await this._waitForAndTakeAction(locator, async () => {
            await this._dblclick(locator)
        })
    }

    async clickElementWithValue(path, value) {
        await this.waitForLoadingMask()
        const locator = await this.getXpath(path, value)
        await this._click(locator)
    }

    async dblClickElementWithValue(path, value) {
        await this.waitForLoadingMask()
        const locator = await this.getXpath(path, value)
        await this._dblclick(locator)
    }

    async chooseRadioButtonWithLabel(label, choice) {
        await this.waitForLoadingMask()
        const locator = await this.getXpath('MODERN_RADIO_BUTTON', label, choice)
        await this._click(locator)
    }

    async accessElementWithValueAndWriteElementValueToTempData(path, value, key) {
        await this.waitForLoadingMask()
        const locator = await this.getXpath(path, value)
        const element = await this.context.locator(locator, { timeout: 3000 })
        await element.waitFor({ state: 'visible' })
        value = await element.textContent()
        ;(await value.length) > 0 ? console.log(path + ' alanindaki ' + value + ' degeri temp dataya ' + key + ' olarak kaydedildi') : console.log('deger bos, kaydedilemedi')
        await CommonUtil.writeTempData(key, value)
        await this.waitForLoadingMask()
    }

    async clickElementByDataWithValue(path, data, key) {
        await this.waitForLoadingMask()
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)
        const element = await this.getXpath(path, text)
        await this._click(element)
    }

    async appearTextUnderTitle(title, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath('MODERNIZASYON_TEXT_UNDER_TITLE', title, text)
        await this.context.locator(element).waitFor({ state: 'visible' })
    }

    async appearTextDataUnderTitle(title, data, key) {
        await this.waitForLoadingMask()
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)
        const element = await this.getXpath('MODERNIZASYON_TEXT_UNDER_TITLE', title, text)
        await this.context.locator(element).waitFor({ state: 'visible' })
    }

    async appearTextDataOnTheArea(path, data, key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath('MODERNIZASYON_INPUT', path)
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)
        const locator = this.context.locator(element)
        await locator.waitFor({ state: 'visible' })
        const tagName = await locator.evaluate((el) => el.tagName.toLowerCase())
        let value

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            value = await locator.inputValue()
        } else {
            value = await locator.textContent()
        }

        await expect(value).toContain(text)
    }

    async appearTextOnTheArea(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath('MODERNIZASYON_INPUT', path)
        const filledText = (await this.getXpath(text)) || text

        const locator = this.context.locator(element)
        await locator.waitFor({ state: 'visible' })
        const tagName = await locator.evaluate((el) => el.tagName.toLowerCase())
        let value

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            value = await locator.inputValue()
        } else {
            value = await locator.textContent()
        }

        await expect(value).toContain(filledText)
    }

    async appearTextOnTheObject(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        const filledText = (await this.getXpath(text)) || text

        const locator = this.context.locator(element)
        await locator.waitFor({ state: 'visible' })
        const tagName = await locator.evaluate((el) => el.tagName.toLowerCase())
        let value

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            value = await locator.inputValue()
        } else {
            value = await locator.textContent()
        }

        await expect(value).toContain(filledText)
    }

    async appearTextDataOnTheObject(path, data, key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)

        const locator = this.context.locator(element)
        await locator.waitFor({ state: 'visible' })
        const tagName = await locator.evaluate((el) => el.tagName.toLowerCase())
        let value

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            value = await locator.inputValue()
        } else {
            value = await locator.textContent()
        }

        await expect(value).toContain(text)
    }

    async dontAppearTextDataOnTheObject(path, data, key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        let text = data === 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)
        console.log(text)

        const locator = this.context.locator(element)
        console.log(locator)
        await locator.waitFor({ state: 'visible' })

        // Ensure the element does exist before checking if it contains the text
        const tagName = await locator.evaluate((el) => el.tagName.toLowerCase())
        console.log(tagName)

        let value

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            value = await locator.inputValue()
        } else {
            value = await locator.textContent()
        }
        console.log(value)

        // Check that the value does NOT contain the specified text
        expect(value).not.toContain(text)
    }

    async appearTextOnTheObject(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)

        const locator = this.context.locator(element)
        await locator.waitFor({ state: 'visible' })
        const tagName = await locator.evaluate((el) => el.tagName.toLowerCase())
        let value

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            value = await locator.inputValue()
        } else {
            value = await locator.textContent()
        }

        await expect(value).toContain(text)
    }

    async disappearTextOnTheObject(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        await expect(this.context.locator(element)).not.toContainText(text)
    }

    async notAppearObjectOnTheScreen(key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(key)
        await this.context.locator(element).waitFor({ state: 'hidden' })
    }

    async appearObjectValueOnTheObject(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        const locatorType = (await element.includes('//')) ? 'xpath' : 'css'
        await this.context.waitForTimeout(3000)
        const elementText = await this.context.locator(`${locatorType}=${element}`).textContent()
        const elementTextTrimToLowerCase = await elementText.trim().toLowerCase()
        const variableValueTrimToLowerCase = await text.trim().toLowerCase()
        expect(elementTextTrimToLowerCase).toContain(variableValueTrimToLowerCase)
    }

    async controlElementOnTheObject(xpathKey1, xpathKey2) {
        await this.waitForLoadingMask()
        const xpath1 = await this.getXpath(xpathKey1)
        const xpath2 = await this.getXpath(xpathKey2)
        const element = await this.context.locator(`${xpath1}${xpath2}]`)
        await element.waitFor({ state: 'visible' })
        await this.waitForLoadingMask()
    }

    async clickByTextOnTheObject(path, text) {
        await this.waitForLoadingMask()
        const xpath = await this.getXpath(path)
        const element = await this.context.locator(`${xpath}//*[text()="${text}"]`)
        await element.waitFor({ state: 'visible' })
        await element.click({ force: true })
    }

    async dblClickByTextOnTheObject(path, text) {
        const xpath = await this.getXpath(path)
        const element = await this.context.locator(`${xpath}//*[text()="${text}"]`)
        await element.waitFor({ state: 'visible' })
        await element.dblclick({ force: true })
    }

    async dblClickDataByTextOnTheObject(path, data, key) {
        await this.waitForLoadingMask()
        const xpath = await this.getXpath(path)
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)
        await this._dblclick(`${xpath}//*[text()="${text}"]`)
    }

    async clickByTextWithIndex(text, int) {
        await this._click(`(//*[text()="${text}"])[${int}]`)
    }

    async dblClickByTextWithIndex(text, int) {
        await this._dblclick(`(//*[text()="${text}"])[${int}]`)
    }

    async scrollToElement(key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(key)
        await this.context.locator(element).hover()
    }

    async waitUntilVisible(key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(key)
        await this.context.locator(element).waitFor({ state: 'visible' })
    }

    async waitUntilUnvisible(key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(key)
        await this.context.locator(element).waitFor({ state: 'hidden' })
    }

    async appearObjectTextOnTheObject(key, text) {
        await this.waitForLoadingMask()
        const xpath = await this.getXpath(key)
        const element = await this.context.locator(xpath)
        await expect(element).toContainText(`${text}`)
    }

    async notAppearObjectTextOnTheObject(key, text) {
        await this.waitForLoadingMask()
        const xpath = await this.getXpath(key)
        const element = await this.context.locator(xpath)
        await expect(element).not.toContainText(`${text}`)
    }

    async chooseItemOnTheSelectElementByVisibleText(key, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(key)
        await this.context.locator(element).selectOption(text)
    }

    async chooseItemOnTheSelectElementByVisibleTextData(key, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(key)
        const textElement = await this.getXpath(text)
        await this.context.locator(element).selectOption(textElement)
    }

    async slowlySendType(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        await this.context.waitForSelector(element, { visible: true, timeout: 5000 })
    }

    async slowlySendTypeData(path, text) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        const textData = await this.getXpath(text)

        try {
            await this.context.type(element, textData, { delay: 500 })
        } catch (error) {
            console.error(`'${element}' elementine slowlySendType yaparken sorun oluştu!`)
        }
    }

    async butonunAktifOlduguKontrolEdilir(button, activityStatus) {
        await this.waitForLoadingMask()
        activityStatus = activityStatus === 'aktif' ? 'enabled' : activityStatus === 'pasif' ? 'disabled' : null
        const buttonElement = await this.context.waitForSelector(`xpath=(//*[text()='${button}'])[last()]/..`)
        const isVisible = await buttonElement.isVisible()
        const hasClassDisabled = await buttonElement.evaluate((el) => el.classList.contains('disabled'))

        if (activityStatus === 'disabled') {
            expect(isVisible).toBe(true)
            expect(hasClassDisabled).toBe(true)
        } else if (activityStatus === 'enabled') {
            expect(isVisible).toBe(true)
            expect(hasClassDisabled).toBe(false)
        } else {
            throw new Error(`Element ${activityStatus} değil`)
        }
    }

    async uploadFileToArea(area, file) {
        await this.waitForLoadingMask()
        console.log(process.cwd())
        const fileChooserPromise = page.waitForEvent('filechooser')
        await this.clickWithText(area)
        const fileChooser = await fileChooserPromise
        await fileChooser.setFiles(path.join(process.cwd(), 'resources/' + file))
        await this.waitForLoadingMask()
    }
    
    async assertTheURL(expectedUrl) {
        const currentUrl = await this.context.url()
        expect(currentUrl).toBe(expectedUrl)
    }

    async handleCaptcha() {
        await this.waitForLoadingMask()
        try {
            // Ana iframe'i bul
            const frame = this.context.frameLocator('iframe[title*="reCAPTCHA"]').first()
            
            if (frame) {
                try {
                    // Checkbox'ı bul ve tıkla
                    const checkbox = frame.locator('.recaptcha-checkbox-border')
                    if (await checkbox.isVisible()) {
                        await checkbox.click()
                        console.log('CAPTCHA checkbox tıklandı')
                        
                        // CAPTCHA'nın tamamlandığından emin olmak için bekleme
                        await this.waitSecond(2)
                        
                        // İkinci iframe'i kontrol et (görsel doğrulama için)
                        const challengeFrame = this.context.frameLocator('iframe[title*="challenge"]').first()
                        if (challengeFrame) {
                            const challenge = challengeFrame.locator('.rc-imageselect-challenge')
                            if (await challenge.isVisible().catch(() => false)) {
                                console.log('Görsel doğrulama gerekiyor, manuel doğrulama için bekleniyor...')
                                await this.waitSecond(15) // Manuel doğrulama için daha uzun süre
                            }
                        }
                    }
                } catch (error) {
                    console.log('Checkbox tıklama hatası:', error)
                    await this.waitSecond(10)
                }
            } else {
                console.log('CAPTCHA iframe bulunamadı')
                await this.waitSecond(10)
            }
        } catch (error) {
            console.error('CAPTCHA işlemi sırasında hata:', error)
            console.log('Manuel CAPTCHA doğrulaması için bekleniyor...')
            await this.waitSecond(15)
        }
    }

    async handleCookieAccept() {
        await this.waitForLoadingMask()
        try {
            // Cookie kabul butonunu bulmak için yaygın kullanılan seçiciler
            const cookieSelectors = [
                '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',  // Yaygın bir cookie bot seçicisi
                '.cookie-accept-button',                                    // Genel class ismi
                'button[data-accept-cookies="true"]',                      // Data attribute
                '//*[contains(text(), "Kabul Et")]',                       // Text içeren buton
                '//*[contains(text(), "Accept All")]',                      // İngilizce alternatif
                '//div[contains(@class, "cursor-pointer") and contains(text(), "Kabul Et")]', // Pegasus spesifik
                '//div[@efl-consent-not-saved and contains(text(), "Kabul Et")]'  // Pegasus spesifik alternatif
            ]

            // Her bir seçiciyi dene
            for (const selector of cookieSelectors) {
                try {
                    const button = this.context.locator(selector)
                    if (await button.isVisible({ timeout: 2000 })) {
                        await button.click()
                        console.log('Cookie kabul edildi')
                        return
                    }
                } catch (error) {
                    continue // Seçici bulunamazsa bir sonrakini dene
                }
            }
            
            console.log('Cookie uyarısı bulunamadı veya zaten kabul edilmiş olabilir')
        } catch (error) {
            console.error('Cookie kabul işlemi sırasında hata:', error)
            // Hatayı fırlat ama testin devam etmesine izin ver
            // throw error
        }
    }

    async selectDepartureAndReturnDates() {
        await this.waitForLoadingMask()
        await this.waitSecond(2) // Takvimin açılması için bekle
        
        // Gidiş tarihi seçimi (4 Mart 2025)
        const departureDayElement = this.context.locator("(//span[@aria-label='Mart 8, 2025'])[1]")
        await departureDayElement.waitFor({ state: 'visible' })
        await departureDayElement.click()
        
        // Dönüş tarihi seçimi (10 Mart 2025)
        const returnDayElement = this.context.locator("(//span[@aria-label='Mart 10, 2025'])[1]")
        await returnDayElement.waitFor({ state: 'visible' })
        await returnDayElement.click()
        
        await this.waitForLoadingMask()
    }
    async generateAndSaveTCNo(key) {
        const generateTCNo = () => {
            // İlk 9 rakamı oluştur (ilk rakam 0 olamaz)
            let digits = String(Math.floor(Math.random() * 9) + 1); // 1-9 arası rastgele sayı
            for (let i = 1; i < 9; i++) {
                digits += Math.floor(Math.random() * 10);
            }

            // Sayıları diziye çevir
            const d = Array.from(digits).map(Number);

            // 10. hane için algoritma:
            // (1. 3. 5. 7. ve 9. hanelerin toplamı * 7 - (2. 4. 6. ve 8. hanelerin toplamı)) % 10
            const oddSum = d[0] + d[2] + d[4] + d[6] + d[8];
            const evenSum = d[1] + d[3] + d[5] + d[7];
            const tenth = ((oddSum * 7) - evenSum) % 10;

            // 11. hane için algoritma:
            // İlk 10 hanenin toplamının 10'a bölümünden kalan
            const eleventh = (d.reduce((sum, num) => sum + num, 0) + tenth) % 10;

            return digits + tenth + eleventh;
        };

        // TC Kimlik numarası doğrulama fonksiyonu
        const validateTCNo = (tcNo) => {
            if (tcNo.length !== 11) return false;
            if (tcNo[0] === '0') return false;

            const digits = Array.from(tcNo).map(Number);

            // 10. hane kontrolü
            const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
            const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
            const expectedTenth = ((oddSum * 7) - evenSum) % 10;
            if (expectedTenth !== digits[9]) return false;

            // 11. hane kontrolü
            const sumFirst10 = digits.slice(0, 10).reduce((sum, num) => sum + num, 0);
            const expectedEleventh = sumFirst10 % 10;
            if (expectedEleventh !== digits[10]) return false;

            return true;
        };

        let tcNo;
        do {
            tcNo = generateTCNo();
        } while (!validateTCNo(tcNo));

        console.log(`Geçerli TC Kimlik numarası üretildi: ${tcNo}`);
        await CommonUtil.writeTempData(key, tcNo);
    }
    async sendType(path, text) {
        await this.waitForLoadingMask()
        const element = (await this.getXpath(path)) !== undefined ? await this.getXpath(path) : await this.getXpath('MODERNIZASYON_INPUT', path)
        await this._type(element, text)
        await this.waitForLoadingMask()
    }
    async sendTypeData(path, data, value) {
        await this.waitForLoadingMask()

        const element = (await this.getXpath(path)) !== undefined ? await this.getXpath(path) : await this.getXpath('MODERNIZASYON_INPUT', path)
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(value) : await Constants.getTestData(data, value)

        await this._type(element, text)
        await this.waitForLoadingMask()
    }
    async checkElementIsVisible(path) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        const locator = this.context.locator(element)
        await locator.waitFor({ state: 'visible' })
        console.log(`${path} elementi görünür durumda`)
    }

    async handleLocationPermission() {
        await this.waitForLoadingMask()
        try {
            // Sayfa yüklenmeden önce konum iznini ayarla
            await this.context.context().grantPermissions(['geolocation'])
            
            // Konum izin dialogunun görünmesini bekle (maksimum 10 saniye)
            await this.waitSecond(2)
            
            // Konum iznini kontrol et ve gerekirse yeniden ayarla
            try {
                await this.context.context().grantPermissions(['geolocation'], {
                    origin: this.context.url()
                })
            } catch (error) {
                console.log('İkincil konum izni ayarlaması başarısız:', error)
            }
            
            console.log('Konum izni başarıyla ayarlandı')
        } catch (error) {
            console.error('Konum izni ayarlanırken hata:', error)
            // Hata durumunda yeniden deneme
            try {
                await this.context.context().grantPermissions(['geolocation'])
            } catch (retryError) {
                console.error('Konum izni yeniden ayarlanırken hata:', retryError)
            }
        }
    }
    async hoverOver(pathHover) {
        await this.waitForLoadingMask()
        const hoverElement = await this.getXpath(pathHover)
        await this.context.locator(hoverElement).hover()
    }

    async hoverAndWaitAndClickElement(pathHover, pathClick) {
        await this.waitForLoadingMask()
        const hoverElement = await this.getXpath(pathHover)
        const clickElement = await this.getXpath(pathClick)
        await this.context.hover(hoverElement)
        await this.context.waitForSelector(clickElement, { visible: true, timeout: 5000 })
        await this.context.click(clickElement)
    }

    async hoverAndWaitAndClickElementWithText(pathHover, textClick) {
        await this.waitForLoadingMask()
        const hoverElement = await this.getXpath(pathHover)
        const clickElement = `//*[contains(text(),'${textClick}')]`
        await this.context.hover(hoverElement)
        await this.context.waitForSelector(clickElement, { visible: true, timeout: 5000 })
        await this.context.click(clickElement)
    }

    async clear(path) {
        const element = (await this.getXpath(path)) !== undefined ? await this.getXpath(path) : await this.getXpath('MODERNIZASYON_INPUT', path)
        await this.context.locator(element).clear()
    }

    async sendKeyboardActionToElement(path, key) {
        await this.waitForLoadingMask()
        // const element = await this.getXpath(path)
        const element = (await this.getXpath(path)) !== undefined ? await this.getXpath(path) : await this.getXpath('MODERNIZASYON_INPUT', path)
        await this.context.locator(element).waitFor({ visible: true })
        await this.context.locator(element).press(key, { force: true })
        await this.waitForLoadingMask()
    }

    async sendKeyboardAction(key) {
        await this.waitForLoadingMask()
        await global.page.keyboard.press(key)
        await this.waitForLoadingMask()
    }

    async sendKeyboardKey(text) {
        await this.waitForLoadingMask()
        await this.context.keyboard.type(text, { force: true })
        await this.waitForLoadingMask()
    }


    async retryClickButtonIfTextExists(text, button, retryCount = 15) {
        await this.waitForLoadingMask()
        let attempts = 0
        
        while (attempts < retryCount) {
            const locator = `(//*[contains(text(),"${text}")])[last()]`
            const element = this.context.locator(locator)
            
            if (await element.isVisible().catch(() => false)) {
                console.log(`Hata mesajı görüldü. Deneme ${attempts + 1}/${retryCount}`)
                await this.butonaTiklaTekilIslev(button)
                await this.waitForLoadingMask()
                await this.waitSecond(2) // Her denemeden sonra kısa bir bekleme
                attempts++
            } else {
                console.log('Hata mesajı görünmüyor, işlem başarılı')
                return // Hata mesajı görünmüyorsa döngüden çık
            }
        }
        
        if (attempts >= retryCount) {
            console.log(`Maksimum deneme sayısına (${retryCount}) ulaşıldı`)
        }
    }

    async waitForPageLoadAndRetry() {
        await this.waitForLoadingMask()
        const errorText = "Üzgünüz, aradığınız uçuşlar geçici olarak listelenemiyor. Lütfen daha sonra tekrar deneyiniz."
        const maxRetries = 15 // Maksimum deneme sayısı
        let retryCount = 0

        while (retryCount < maxRetries) {
            try {
                // Hata mesajını kontrol et
                const errorLocator = this.context.locator(`text=${errorText}`)
                const isErrorVisible = await errorLocator.isVisible().catch(() => false)

                if (!isErrorVisible) {
                    console.log('Sayfa başarıyla yüklendi')
                    return // Hata mesajı görünmüyorsa başarılı
                }

                // Hata mesajı görünüyorsa "Tekrar Dene" butonuna tıkla
                console.log(`Yükleme hatası. Deneme ${retryCount + 1}/${maxRetries}`)
                const retryButton = await this.getXpath('TEKRAR_DENE')
                await this._click(retryButton)
                await this.waitForLoadingMask()
                await this.waitSecond(2) // Her denemeden sonra kısa bir bekleme

                retryCount++
            } catch (error) {
                console.error('Sayfa yükleme kontrolü sırasında hata:', error)
                throw error
            }
        }

        throw new Error(`Sayfa ${maxRetries} denemeye rağmen düzgün yüklenemedi`)
    }

    async selectPackageType(paket) {
        await this.waitForLoadingMask()
        
        let elementPath
        switch (paket.toLowerCase()) {
            case 'light':
                elementPath = 'LIGHT_PAKET'
                break
            case 'süper eko':
                elementPath = 'SUPER_EKO_PAKET'
                break
            case 'avantaj':
                elementPath = 'AVANTAJ_PAKET'
                break
            case 'comfort flex':
                elementPath = 'COMFORT_FLEX_PAKET'
                break
            default:
                throw new Error(`Geçersiz paket tipi: ${paket}. Geçerli paket tipleri: Light, Süper Eko, Avantaj, Comfort Flex`)
        }
        
        await this.clickElement(elementPath)
        await this.waitForLoadingMask()
    }

    async fillAllPassengerInfo(passengerCount) {
        await this.waitForLoadingMask()

        // İsim ve soyisim listeleri
        const names = [
            "Ahmet", "Mehmet", "Ali", "Mustafa", "Hasan", 
            "Hüseyin", "İbrahim", "Murat", "Ömer", "Yusuf",
            "Can", "Burak", "Emre", "Deniz", "Cem",
            "Serkan", "Volkan", "Orhan", "Kemal", "Selim"
        ]
        
        const surnames = [
            "Yılmaz", "Kaya", "Demir", "Şahin", "Çelik",
            "Yıldız", "Özdemir", "Arslan", "Doğan", "Kılıç",
            "Aydın", "Özkan", "Yalçın", "Öztürk", "Aktaş",
            "Aslan", "Erdoğan", "Şen", "Güneş", "Kurt"
        ]
        
        for (let i = 1; i <= parseInt(passengerCount); i++) {
            // Yolcu accordion'una tıkla
            const accordionButton = `//div[@id='passengerForm_${i}']//button[@class='title-area']`
            await this._click(accordionButton)
            await this.waitSecond(1)
            
            // Rastgele isim ve soyisim oluştur
            const randomName = names[Math.floor(Math.random() * names.length)]
            const randomSurname = surnames[Math.floor(Math.random() * surnames.length)]
            
            // Rastgele doğum tarihi oluştur (1960-2005 arası)
            const randomDay = Math.floor(Math.random() * 28) + 1
            const randomMonth = Math.floor(Math.random() * 12) + 1
            const randomYear = Math.floor(Math.random() * (2005 - 1960)) + 1960
            
            // Form alanlarını doldur
            await this._type(`//div[@id='passengerForm_${i}']//div[@data-test-id='passengerName']//input`, randomName)
            await this._type(`//div[@id='passengerForm_${i}']//div[@data-test-id='passengerSurname']//input`, randomSurname)
            await this._type(`//div[@id='passengerForm_${i}']//div[@data-test-id='dayInput']//input`, randomDay.toString())
            await this._type(`//div[@id='passengerForm_${i}']//div[@data-test-id='monthInput']//input`, randomMonth.toString())
            await this._type(`//div[@id='passengerForm_${i}']//div[@data-test-id='yearInput']//input`, randomYear.toString())
            
            // Cinsiyet seç (Erkek)
            await this._click(`//div[@id='passengerForm_${i}']//span[@data-test-id='genderM']`)
            
            // Uyruk seç (Diğer Ülke Vatandaşı)
            await this._click(`//div[@id='passengerForm_${i}']//span[@data-test-id='foreignCitizen']`)
            
            await this.waitSecond(1)
        }
        
        await this.waitForLoadingMask()
    }
    async selectSeatsForAllPassengers(count) {
        await this.waitForLoadingMask()
        
        // Koltuk seçim alanının görünür olması için scroll
        await this.context.evaluate(() => {
            window.scrollBy(0, 500) // Sayfayı 500px aşağı kaydır
        })
        await this.waitSecond(1)
        
        let selectedSeats = 0
        let rowIndex = 17 // Başlangıç sıra numarası
        const columns = ['A', 'B', 'C', 'D', 'E', 'F'] // Koltuk harfleri
        
        while (selectedSeats < parseInt(count)) {
            for (const column of columns) {
                if (selectedSeats >= parseInt(count)) break
                
                const seatId = `${rowIndex}${column}`
                // XPath locator'ı güncellendi
                const seatLocator = `//button[@id='${seatId}' and not(@disabled)]`
                
                try {
                    const seat = this.context.locator(seatLocator)
                    const isVisible = await seat.isVisible().catch(() => false)
                    const isHidden = await seat.evaluate(el => {
                        return window.getComputedStyle(el).display === 'none'
                    }).catch(() => true)
                    
                    if (isVisible && !isHidden) {
                        await seat.click()
                        console.log(`Koltuk seçildi: ${seatId}`)
                        selectedSeats++
                        await this.waitSecond(0.5)
                    }
                } catch (error) {
                    console.log(`${seatId} koltuğu seçilemedi:`, error)
                    continue
                }
            }
            rowIndex++
            
            if (rowIndex > 40) {
                throw new Error('Yeterli sayıda uygun koltuk bulunamadı!')
            }
        }
        
        await this.waitForLoadingMask()
    }

    async butonunGorunurOlduguKontrolEdilir(button) {
        await this.waitForLoadingMask()
        const controlIndexes = ['last()', 'last()-1', '1']
        let buttonFound = false

        // Link elementleri için kontrol
        const linkXPath = `//a[contains(text(),'${button}') or @title='${button}']`
        const linkEl = this.context.locator(linkXPath)
        
        if (await linkEl.isVisible().catch(() => false)) {
            console.log(`${button} linki görünür durumda`)
            buttonFound = true
        } else {
            // Mevcut span elementi kontrolü
            for (const index of controlIndexes) {
                const buttonXPath = `(//span[text()='${button}'])[${index}]`
                const el = this.context.locator(buttonXPath)
                
                if (await el.isVisible().catch(() => false)) {
                    console.log(`${button} butonu görünür durumda`)
                    buttonFound = true
                    break
                }
            }
        }

        if (!buttonFound) {
            throw new Error(`${button} butonu/linki görünür değil`)
        }
    }

    async scrollToBottom() {
        await this.waitForLoadingMask()
        
        let lastHeight = await this.context.evaluate(() => document.body.scrollHeight)
        
        while (true) {
            // Sayfanın en altına kaydır
            await this.context.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight)
            })
            
            // Yeni içeriğin yüklenmesi için bekle
            await this.waitSecond(2)
            
            // Yeni yüksekliği kontrol et
            const newHeight = await this.context.evaluate(() => document.body.scrollHeight)
            
            // Eğer yükseklik değişmediyse, sayfa sonuna ulaşılmıştır
            if (newHeight === lastHeight) {
                break
            }
            lastHeight = newHeight
        }
        
        await this.waitForLoadingMask()
    }

    async selectAndVerifyCity(city) {
        await this.waitForLoadingMask()
        
        // Şehir butonunu bul
        const cityButtonLocator = `//h3[contains(text(),'${city}')]`
        const cityButton = this.context.locator(cityButtonLocator)
        
        // Butona scroll yap
        await cityButton.scrollIntoViewIfNeeded()
        await this.waitSecond(3)
        
        // Butona tıkla
        await cityButton.click()
        
        // Şehir başlığını kontrol et
        const cityTitleLocator = await this.getXpath('STORES_CITY_TITLE')
        const cityTitleElement = this.context.locator(cityTitleLocator)
        const cityTitleText = await cityTitleElement.textContent()
        
        // Başlık kontrolü
        const expectedTitle = `${city} / TÜM MAĞAZALAR`
        if (cityTitleText !== expectedTitle) {
            throw new Error(`Beklenen başlık "${expectedTitle}" fakat görünen başlık "${cityTitleText}"`)
        }
        console.log(`Mağaza şehir başlığı: ${cityTitleText}`)
        
        // Harita görünürlük kontrolü
        const mapsLocator = await this.getXpath('STORES_MAPS')
        const mapsElement = this.context.locator(mapsLocator)
        await mapsElement.waitFor({ state: 'visible' })
        
        await this.waitForLoadingMask()
    }

    async selectCityAndDistrictAndVerify(sehir, ilce) {
        await this.waitForLoadingMask()
        
        // Şehir dropdown'ına tıkla
        await this.clickElement('SEHIR_DROPDOWN')
        await this.waitSecond(1)
        
        // Şehri seç - xpath ile direkt text'e tıkla
        await this._click(`(//*[text()="${sehir}"])[1]`)
        await this.waitSecond(1)
        
        // İlçe dropdown'ına tıkla
        await this.clickElement('ILCE_DROPDOWN')
        await this.waitSecond(1)
        
        // İlçeyi seç - xpath ile direkt text'e tıkla
        await this._click(`(//*[text()="${ilce}"])[1]`)
        await this.waitSecond(1)
        
        // Beklenen metni kontrol et
        const expectedText = `${sehir} / ${ilce} Mağazalar`
        await this.appearObjectTextOnTheObject('STORES_CITY_TITLE', expectedText)
    }

    async navigateBack() {
        await this.waitForLoadingMask()
        
        try {
            // Geri dönüş işlemini başlat
            const navigationPromise = this.context.goBack()
            
            // Sayfa yükleme durumlarını bekle
            await Promise.all([
                navigationPromise,
                this.context.waitForLoadState('domcontentloaded'),
                this.context.waitForLoadState('load'),
                this.context.waitForLoadState('networkidle')
            ])
            
            // Kısa bir bekleme ekle
            await this.waitSecond(1)
            
            // Son bir kez daha yükleme durumunu kontrol et
            await this.waitForLoadingMask()
            
        } catch (error) {
            console.error('Geri dönüş sırasında hata:', error)
            
            // Hata durumunda sayfanın yüklenmesini bekle
            await this.context.waitForLoadState('domcontentloaded')
            await this.context.waitForLoadState('load')
            await this.waitForLoadingMask()
        }
    }
    async appearTextOnTheScreen(text) {
        
        // Önce ürün başlığında ara
        const productTitleXPath = `//h3[contains(@class, 'product-card__title')]//span[normalize-space(text())="${text}"]`
        const generalXPath = `(//*[contains(.,"${text}")])[1]`
        
        try {
            // İlk olarak ürün başlığında aramayı dene
            const productTitleElement = this.context.locator(productTitleXPath)
            const isProductTitleVisible = await productTitleElement.isVisible().catch(() => false)
            
            if (isProductTitleVisible) {
                await productTitleElement.waitFor({ state: 'visible' })
                console.log(`"${text}" ürün başlığı görünür durumda`)
                return
            }
            
            // Ürün başlığında bulunamazsa genel aramayı dene
            const generalElement = this.context.locator(generalXPath)
            await generalElement.waitFor({ state: 'visible' })
            console.log(`"${text}" metni sayfada görünür durumda`)
            
        } catch (error) {
            throw new Error(`"${text}" metni sayfada bulunamadı veya görünür değil`)
        }
    }
    async appearTextDataOnTheScreen(data, value) {
        await this.waitForLoadingMask()

        // key değerini '+' ile bölüyoruz
        const keyParts = value.split('+')
        const firstPart = keyParts[0]
        const secondPart = keyParts[1]

        // data 'Temp Data' ise CommonUtil.readTempData kullan, değilse Constants.getTestData kullan
        let text
        try {
            text = data === 'Temp Data' 
                ? await CommonUtil.readTempData(firstPart) 
                : await Constants.getTestData(data, firstPart)

            if (!text) {
                throw new Error(`"${firstPart}" değeri ${data}'da bulunamadı`)
            }

            // İkinci parçayı text ile birleştiriyoruz
            const newText = `${text}${secondPart ? secondPart.trim() : ''}`.trim()
            console.log(`"${newText}" textinin gorunur oldugu kontrol ediliyor`)

            const element = `(//*[.="${newText}"])[1]`
            await this.context.locator(element).waitFor({ state: 'visible' })
        } catch (error) {
            console.error(`Hata: ${error.message}`)
            throw error
        }
    }
    async clickElementByDataValue(path, data, key) {
        await this.waitForLoadingMask()
        let text = data == 'Temp Data' ? await CommonUtil.readTempData(key) : await Constants.getTestData(data, key)
        const element = await this.getXpath(path, text)
        await this._click(element)
    }
    async dontAppearTextOnTheScreen(text) {
        await this.waitForLoadingMask()
        const element = `(//*[contains(text(),"${text}")])[last()]`
        await this.context.locator(element).waitFor({ state: 'hidden' })
    }
    async dontAppearTextDataOnTheScreen(data, value) {
        await this.waitForLoadingMask()
        const dataElement = data == 'Temp Data' ? await CommonUtil.readTempData(value) : await Constants.getTestData(data, value)
        const element = `(//*[contains(text(),"${dataElement}")])[last()]`
        await this.context.locator(element).waitFor({ state: 'hidden' })
    }
    async appearTextOnTheScreenWithIndex(text, index) {
        await this.waitForLoadingMask()
        const element = `(//*[contains(text(),"${text}")])[${index}]`
        await this.context.locator(element).waitFor({ state: 'visible' })
    }
    async clickDataElementIfExist(data, value) {
        await this.waitForLoadingMask()
        const dataElement = data == 'Temp Data' ? await CommonUtil.readTempData(value) : await Constants.getTestData(data, value)
        const locator = `(//*[text()="${dataElement}"])[last()]`

        await this._waitForAndTakeAction(locator, async () => {
            await this._click(locator)
        })
    }
    async dblClickDataElement(data, value) {
        await this.waitForLoadingMask()
        const dataElement = data == 'Temp Data' ? await CommonUtil.readTempData(value) : await Constants.getTestData(data, value)
        const element = `(//*[text()="${dataElement}"])[last()]`
        console.log(element + ' elementine double click yapildi')
        await this._dblclick(element)
    }
    async rightClickDataElement(data, value) {
        await this.waitForLoadingMask()
        const dataElement = data == 'Temp Data' ? await CommonUtil.readTempData(value) : await Constants.getTestData(data, value)
        const element = `(//*[text()="${dataElement}"])[last()]`
        await this._rightClick(element)
    }

    async clickDataElement(data, value, index = 'last()') {
        await this.waitForLoadingMask()
        const dataElement = data == 'Temp Data' ? await CommonUtil.readTempData(value) : await Constants.getTestData(data, value)
        const element = `(//*[text()="${dataElement}"])[${index}]`
        console.log(element)
        await this._click(element)
    }
    async butonaTiklaTekilIslevWaitsiz(button) {
        console.log(button + ' butonuna tiklandi')
        if (process.env.ENVIRONMENT == 'elazig' || process.env.ENVIRONMENT == 'eskisehir') {
            if (button == 'Görüntüleme') {
                button = 'Radyoloji'
            }
        }
        let controlIndexes = ['last()', 'last()-1', '1']
        // const timeout = 1000
        let status = false
        for (let index of controlIndexes) {
            let buttonElement = this.projectName == 'Konvansiyonel' ? await this.getXpath('BUTTON', button, index) : await this.getXpath('MODERN_BUTTON', button, index)
            status = await this._waitForAndTakeAction(buttonElement, async () => {
                await this._click(buttonElement)
            })
            if (status) {
                break
            }
        }
    }
    async butonaCiftTiklaTekilIslev(button) {
        console.log(button + ' butonuna tiklandi');
        await this.waitForLoadingMask();
        if (process.env.ENVIRONMENT === 'elazig' || process.env.ENVIRONMENT === 'eskisehir') {
            if (button === 'Görüntüleme') {
                button = 'Radyoloji';
            }
        }
        const controlIndexes = ['last()', 'last()-1', '1'];
        const globalTimeout = (parseInt(process.env.WAIT_TIMEOUT, 10) || 1) * 60000;
        const deadline = Date.now() + globalTimeout;
        let buttonFound = false;

        // Global timeout süresi dolana kadar indexleri sürekli kontrol et
        while (Date.now() < deadline && !buttonFound) {
            for (const index of controlIndexes) {
                const buttonElement = this.projectName === 'Konvansiyonel'
                    ? await this.getXpath('BUTTON', button, index)
                    : await this.getXpath('MODERN_BUTTON', button, index);
                const el = this.context.locator(buttonElement);
                if (await el.isVisible().catch(() => false)) {
                    await this._dblclick(buttonElement);
                    buttonFound = true;
                    break;
                }
            }
            if (!buttonFound) {
                await this.context.waitForTimeout(200);
            }
        }
        if (!buttonFound) {
            throw new Error(`Element ${button} herhangi bir indexte bulunamadı`);
        }
        await this.waitForLoadingMask();
    }
    // CommonActions.js
  
    async hoverOverElement(xpathKey) {
     
        await this.waitForLoadingMask();  
        
        const elementLocator = await this.getXpath(xpathKey);  
        
        console.log(`Bulunan XPath: ${elementLocator}`);  
        
        if (!elementLocator) {
            throw new Error(`XPath değeri bulunamadı: ${xpathKey}`);
        }
        
        const element = this.context.locator(`xpath=${elementLocator}`);
        
        await this.context.waitForSelector(`xpath=${elementLocator}`, { timeout: 5000 });
        await element.hover();
    }


    async checkElementText(jsonKey, expectedText) {
        await this.waitForLoadingMask(); // Yüklenme maskesi varsa bekle
    
        // JSON'dan XPath'i al
        const xpathValue = await this.getXpath(jsonKey); 
    
        if (!xpathValue) {
            throw new Error(`JSON dosyasında "${jsonKey}" anahtarı bulunamadı!`);
        }
    
        // Elementi bul ve içindeki metni al
        const element = this.context.locator(`xpath=${xpathValue}`);
        await element.waitFor({ state: 'visible', timeout: 5000 }); // Elementin görünmesini bekle
        const actualText = (await element.innerText()).trim();
    
        // Metni doğrula
        expect(actualText).toBe(expectedText);
    
        console.log(`✅ "${jsonKey}" elementi doğrulandı. İçerik: "${actualText}"`);
    }
    

    async clickElementAndSaveName(path, key) {
        await this.waitForLoadingMask()
        const element = await this.getXpath(path)
        
        // Ürün başlığını içeren elementi bul ve metnini al
        const productNameElement = this.context.locator(`${element}//h3[@class='product-card__title']//span`)
        const productName = await productNameElement.textContent()
        
        // Ürün adını temp data'ya kaydet
        await CommonUtil.writeTempData(key, productName)
        console.log(`Ürün adı "${productName}" temp data'ya "${key}" olarak kaydedildi`)
        
        // Elemente tıkla
        await this._click(element)
        await this.waitForLoadingMask()
    }
    async navigateToSubCategory(mainCategory, subCategory) {
        await this.waitForLoadingMask();
        
        // Ana kategori menüsünün üzerine gel
        const mainMenuLocator = `//a[contains(@class, 'menu__main--item-link-1') and normalize-space(.)='${mainCategory}']`;
        await this.context.locator(mainMenuLocator).first().waitFor({state: 'visible'});
        await this.context.hover(mainMenuLocator);
        await this.waitSecond(1);
        
        // Alt kategoriye tıkla - daha spesifik bir seçici kullanıyoruz
        const subMenuLocator = `//a[contains(@class, 'menu__main--item-link') and (
            translate(@title, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')=translate('${subCategory}', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') 
            or 
            .//div[contains(@class, 'menu__main--item-link-text') and normalize-space(text())='${subCategory}']
        )]`;
        await this.context.locator(subMenuLocator).first().waitFor({state: 'visible'});
        await this._click(subMenuLocator);
        
        await this.context.waitForLoadState('networkidle');
    }

    async navigateToSubSubCategory(mainCategory, subCategory) {
        await this.waitForLoadingMask();
        
        // Ana kategori menüsünün üzerine gel
        const mainMenuLocator = `//a[contains(@class, 'menu__main--item-link-1') and normalize-space(.)='${mainCategory}']`;
        await this.context.locator(mainMenuLocator).first().waitFor({state: 'visible'});
        await this.context.hover(mainMenuLocator);
        await this.waitSecond(1);
        
        // Alt kategori menüsünün üzerine gel - daha spesifik bir seçici kullanıyoruz
        const subMenuLocator = `//a[contains(@class, 'menu__main--item-link') and (
            translate(@title, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')=translate('${subCategory}', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') 
            or 
            .//div[contains(@class, 'menu__main--item-link-text') and normalize-space(text())='${subCategory}']
        )]`;
        await this.context.locator(subMenuLocator).first().waitFor({state: 'visible'});
        await this.context.hover(subMenuLocator);
        await this.waitSecond(1);
        
        // Alt-alt kategoriye tıkla - daha spesifik bir seçici kullanıyoruz
        const subSubMenuLocator = `//a[@href='/${mainCategory.toLowerCase()}-t-shirt' and contains(@class, 'menu__main--item-link') and .//div[text()='${subSubCategory}']]`;
        await this.context.locator(subSubMenuLocator).first().waitFor({state: 'visible'});
        await this._click(subSubMenuLocator);
        
        await this.context.waitForLoadState('networkidle');
    }
    async navigateToSubSubSubCategory(mainCategory, subSubCategory) {
        await this.waitForLoadingMask();
        
        // Ana kategori menüsünün üzerine gel
        const mainMenuLocator = `//a[contains(@class, 'menu__main--item-link-1') and normalize-space(.)='${mainCategory}']`;
        await this.context.locator(mainMenuLocator).first().waitFor({state: 'visible'});
        await this.context.hover(mainMenuLocator);
        await this.waitSecond(1);
        
        // Alt kategorinin href'ini belirle
        let href = '';
        const categoryPrefix = mainCategory.toLowerCase().replace('ı', 'i').replace('ğ', 'g').replace('ü', 'u').replace('ş', 's').replace('ö', 'o').replace('ç', 'c');
        
        // Erkek kategorileri için href eşleştirmeleri
        if (categoryPrefix === 'erkek') {
            switch(subSubCategory) {
                case 'Basic Giyim': href = '/erkek/basics'; break;
                case 'Ceket ve Yelek': href = '/erkek-yelek?filtre=kategori:ceket'; break;
                case 'Eşofman Altı': href = '/erkek-esofman-alti'; break;
                case 'Gömlek': href = '/erkek-gomlek'; break;
                case 'Kazak': href = '/erkek-kazak'; break;
                case 'Jean Pantolon': href = '/erkek-jean-pantolon'; break;
                case 'Pantolon': href = '/erkek-pantolon'; break;
                case 'Polo Tişört': href = '/erkek-polo-t-shirt'; break;
                case 'Sweatshirt': href = '/erkek-sweatshirt'; break;
                case 'Şort & Bermuda': href = '/erkek-sort?filtre=kategori:bermuda'; break;
                case 'Tişört': href = '/erkek-t-shirt'; break;
                default: href = `/${categoryPrefix}-${subSubCategory.toLowerCase()}`; break;
            }
        }
        // Kadın kategorileri için href eşleştirmeleri
        else if (categoryPrefix === 'kadin') {
            switch(subSubCategory) {
                case 'Atlet': href = '/kadin-atlet'; break;
                case 'Bluz': href = '/kadin-bluz'; break;
                case 'Ceket': href = '/kadin-ceket'; break;
                case 'Elbise': href = '/kadin-elbise'; break;
                case 'Eşofman Altı': href = '/kadin-esofman-alti'; break;
                case 'Etek': href = '/kadin-etek'; break;
                case 'Gömlek': href = '/kadin-gomlek'; break;
                case 'Hırka': href = '/kadin-hirka'; break;
                case 'Jean Pantolon': href = '/kadin-jean-pantolon'; break;
                case 'Kazak': href = '/kadin-kazak'; break;
                case 'Mont ve Kaban': href = '/kadin-mont?filtre=kategori:kaban-parka'; break;
                case 'Pantolon': href = '/kadin-pantolon'; break;
                case 'Sweatshirt': href = '/kadin-sweatshirt'; break;
                case 'Tayt': href = '/kadin-tayt'; break;
                case 'Tişört': href = '/kadin-t-shirt'; break;
                case 'Trençkot & Yağmurluk': href = '/kadin-trenckot?filtre=kategori:yagmurluk'; break;
                case 'Tunik': href = '/kadin-tunik'; break;
                case 'Yelek & Süveter': href = '/kadin-yelek?filtre=kategori:suveter'; break;
                default: href = `/${categoryPrefix}-${subSubCategory.toLowerCase()}`; break;
            }
        }
        
        // Alt-alt kategoriye tıkla
        const subSubMenuLocator = `//a[@href='${href}' and contains(@class, 'menu__main--item-link') and .//div[contains(@class, 'menu__main--item-link-text') and normalize-space(text())='${subSubCategory}']]`;
        await this.context.locator(subSubMenuLocator).first().waitFor({state: 'visible'});
        await this._click(subSubMenuLocator);
    }

    async selectAndSaveProduct(selection) {
        await this.waitForLoadingMask();
        
        // Daha spesifik ürün kartı seçici
        const productCardSelector = "//div[@class='catalog-products__item catalog-products__item--single col-6 col-lg-3 data-pushed']";
        
        // Sayfanın yüklenmesini ve ürünlerin görünür olmasını bekle
        await this.context.locator(productCardSelector).first().waitFor({ 
            state: 'visible',
            timeout: 10000 
        });

        let productElement;
        if (selection === 'ilk urune') {
            productElement = await this.context.locator(productCardSelector).first();
        } else if (selection === 'herhangi bir urune') {
            const products = await this.context.locator(productCardSelector).all();
            const randomIndex = Math.floor(Math.random() * products.length);
            productElement = products[randomIndex];
        }

        // Ürün başlığını bulmak için daha spesifik bir seçici
        const productNameElement = await productElement.locator('.product-card__title--name');
        const productName = await productNameElement.textContent();
        
        // Temp data'ya kaydet
        await CommonUtil.writeTempData('urun_adi', productName);
        
        console.log(`Seçilen ürün: ${productName}`);

        // Ürüne tıkla
        await productElement.click();
        
        await this.waitForLoadingMask();
        return productName;

    async scrollUp(scrollAmount = 300) {
        await this.waitForLoadingMask(); // Yüklenme maskesinin kalkmasını bekle
    
        await this.context.evaluate((amount) => {
            window.scrollBy(0, -amount); // Sayfayı yukarı kaydır
        }, scrollAmount);
    
        console.log(`Sayfa ${scrollAmount} piksel yukarı kaydırıldı.`);
    }
     async scrollDown(scrollCount = 3, scrollAmount = 300) {
        await this.waitForLoadingMask(); // Sayfa yüklenme maskesinin kalkmasını bekle

        for (let i = 0; i < scrollCount; i++) {
            await this.context.evaluate((amount) => {
                window.scrollBy(0, amount); // Sayfayı aşağı kaydır
            }, scrollAmount);

            console.log(`📜 Sayfa ${scrollAmount} piksel aşağı kaydırıldı. (${i + 1}/${scrollCount})`);
            await this.context.waitForTimeout(500); // Her kaydırmadan sonra bekleme
        }
    }
    async scrollUpCount(scrollCount=3,scrollAmount = 300) {
        await this.waitForLoadingMask(); // Yüklenme maskesinin kalkmasını bekle

    for (let i = 0;i<scrollCount;i++){
        await this.context.evaluate((amount) => {
            window.scrollBy(0, -amount); // Sayfayı yukarı kaydır
        }, scrollAmount);
    }
    
        console.log(`Sayfa ${scrollAmount} piksel yukarı kaydırıldı.`);
    }
    
    async getTextByXpath(xpath) {
        await this.waitForLoadingMask(); // Yüklenme maskesini bekle
        const element = await this.context.locator(xpath);
        if (await element.isVisible()) {
            return await element.textContent();
        } else {
            throw new Error(`Element bulunamadı: ${xpath}`);
        }
    }

    async getCartPriceDetails() {
        const onTutarXPath = "//div[@id='ContainerShoppingCart']/div/div[3]/div/div[1]/div[1]/div[1]/span[2]";
        const kargoUcretiXPath = "//div[@id='ContainerShoppingCart']/div/div[3]/div/div[1]/div[1]/div[2]/span[2]";
        const toplamTutarXPath = "//div[@id='ContainerShoppingCart']/div/div[3]/div/div[1]/div[1]/div[3]/div/span[2]";

        const onTutarText = await this.getTextByXpath(onTutarXPath);
        const kargoUcretiText = await this.getTextByXpath(kargoUcretiXPath);
        const toplamTutarText = await this.getTextByXpath(toplamTutarXPath);

        const onTutar = parseFloat(onTutarText.replace(/[^\d.]/g, '')) || 0;
        const kargoUcreti = parseFloat(kargoUcretiText.replace(/[^\d.]/g, '')) || 0;
        const toplamTutar = parseFloat(toplamTutarText.replace(/[^\d.]/g, '')) || 0;

        console.log(`Ön Tutar: ${onTutar}, Kargo Ücreti: ${kargoUcreti}, Toplam Tutar: ${toplamTutar}`);

        return { onTutar, kargoUcreti, toplamTutar };
    }

    async checkTotalAmount() {
        const { onTutar, kargoUcreti, toplamTutar } = await this.getCartPriceDetails();

        if (onTutar + kargoUcreti === toplamTutar) {
            console.log("Toplam ücret doğru hesaplandı.");
        } else {
            throw new Error(`Toplam ücret hatalı! Beklenen: ${onTutar + kargoUcreti}, Bulunan: ${toplamTutar}`);
        }
    }
 
    async removeProductAndVerify() {
        // Sayfada yüklenme maskesini bekle
        await this.waitForLoadingMask();

        // 1 saniye bekle
        await this.context.waitForTimeout(1000);

        const productXpath = "//div[@id='ContainerShoppingCart']/div/div[2]/div/div/div/div[1]/div[3]/div[1]/a[1]";
        const cartProductElement = this.context.locator(productXpath);
        await expect(cartProductElement).toBeVisible({ timeout: 5000 });
        let cartProductName = await cartProductElement.textContent();
        
        // Bütün harfleri küçük yap
        cartProductName = cartProductName.toUpperCase();    
        cartProductName = cartProductName.replace(/I/g, 'İ');    
        cartProductName = cartProductName.replace(/\s+/g, '');
        
    
        // Ürün silme butonuna tıklama
        const removeButtonXpath = "//div[@id='ContainerShoppingCart']/div/div[2]/div/div[1]/div/div[1]/div[3]/div[4]/div/a[1]/span";
        const removeButton = this.context.locator(removeButtonXpath);
        await expect(removeButton).toBeVisible({ timeout: 5000 });
        await removeButton.click();
        console.log("🗑️ Ürün kaldırma butonuna tıklandı.");

        // "Bu işlemle ürün sepetinizden kaldırılacaktır" mesajını doğrula
        const confirmationTextXpath = "//div[@id='productDeleteModal']/div/div[2]/div[1]/span";
        const confirmationText = this.context.locator(confirmationTextXpath);
        await expect(confirmationText).toBeVisible({ timeout: 5000 });
        console.log("✅ Silme onay mesajı görüntülendi.");

        // Onay butonuna tıklama
        const confirmButtonXpath = "//div[@id='productDeleteModal']/div/div[2]/div[2]/button[1]";
        const confirmButton = this.context.locator(confirmButtonXpath);
        await expect(confirmButton).toBeVisible({ timeout: 5000 });
        await confirmButton.click();
        console.log("✔️ Ürün silme işlemi onaylandı.");

        // "Sepetinizde ürün yok" mesajını doğrula
        const emptyCartTextXpath = "//div[contains(text(), 'Sepetinizde ürün yok')]";
        const emptyCartText = this.context.locator(emptyCartTextXpath);
        await expect(emptyCartText).toBeVisible({ timeout: 5000 });
        console.log("✅ Sepetinizde ürün yok mesajı görüntülendi.");

        // Favoriler butonuna tıklama
        const favoriteButtonXpath = "//header/div[2]/div[3]/div[3]/a";
        const favoriteButton = this.context.locator(favoriteButtonXpath);
        await expect(favoriteButton).toBeVisible({ timeout: 5000 });
        await favoriteButton.click();
        console.log("🛍️ Favoriler simgesine tıklandı.");

        const detailProductXpath = "//main/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div/div/h3/a";
const detailProductElement = this.context.locator(detailProductXpath);
await expect(detailProductElement).toBeVisible({ timeout: 5000 });
let detailProductName = await detailProductElement.textContent();
detailProductName = detailProductName.replace(/\s+/g, '');
detailProductName = detailProductName.replace(/I/g, 'İ');    






        // Sepetteki ürün ile detay sayfasındaki ürün ismini karşılaştır
        if (detailProductName !== cartProductName) {
            throw new Error(`❌ Beklenen ürün: ${cartProductName}, ancak detay sayfasında: ${detailProductName}`);
        }

        console.log(`✅ Ürün ismi detay sayfasında doğrulandı: ${detailProductName}`);

    }

    async selectProduct(selection) {
        await this.waitForLoadingMask();
        
        // Ürün kartı seçicisi
        const productCardSelector = "//div[@class='catalog-products__item catalog-products__item--single col-6 col-lg-3 data-pushed']";
        
        // Sayfanın yüklenmesini ve ürünlerin görünür olmasını bekle
        await this.context.locator(productCardSelector).first().waitFor({ 
            state: 'visible',
            timeout: 10000 
        });

        let productElement;
        if (selection === 'ilk urune') {
            productElement = await this.context.locator(productCardSelector).first();
        } else if (selection === 'herhangi bir urune') {
            const products = await this.context.locator(productCardSelector).all();
            const randomIndex = Math.floor(Math.random() * products.length);
            productElement = products[randomIndex];
        }

        // Ürüne tıkla
        await productElement.click();
        
        await this.waitForLoadingMask();
    }

    async navigateToStoktaBulunmayanUrun() {
        await this.waitForLoadingMask();
        await this.context.goto('https://www.defacto.com.tr/regular-fit-bisiklet-yaka-kazak-3113666');
        await this.waitForLoadingMask();
    }
}

module.exports = new CommonActions()
