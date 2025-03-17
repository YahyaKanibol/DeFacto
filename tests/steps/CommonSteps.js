const { Given, When, Then } = require('@cucumber/cucumber')
const CommonActions = require('../pages/CommonActions')



Then('{string} butonuna tikla ve acilan sekmeye gec', async (button) => {
    await CommonActions.clickButtonAndSetContextToNewTab(button)
})

Then('Mevcut tarayici sekmesini kapat', async () => {
    await CommonActions.closeTabAndSetContextToFirstTab()
})

Then('{string} projeye gecis yap', async (projectName) => {
    await CommonActions.waitSecond(2)
    await CommonActions.setContext(projectName)
})

Then('Calisilacak basligi {string} olarak ayarla', async (title) => {
    await CommonActions.setContextAsTitle(title)
})

Then('Sayfa yuklenene kadar bekle', async () => {
    await CommonActions.waitForLoadingMask()
    await CommonActions.waitSecond(0.3)
    await CommonActions.waitForLoadingMask()
    await CommonActions.waitSecond(0.3)
    await CommonActions.waitForLoadingMask()
    await CommonActions.waitSecond(0.3)
    await CommonActions.waitForLoadingMask()
    await CommonActions.waitSecond(0.3)
    await CommonActions.waitForLoadingMask()
    await CommonActions.waitSecond(0.3)
    await CommonActions.waitForLoadingMask()
})

Given('{string} sayfasina gidilir', async (urlKey) => {
    await CommonActions.navigateTo(urlKey)
})

Then('{int} saniye beklenir', async (second) => {
    await CommonActions.waitSecond(second)
})

Then('{string} butonunun aktif oldugu kontrol edilir', async (button) => {
    await CommonActions.isButtonActive(button)
})

Then('{string} butonunun pasif oldugu kontrol edilir', async (button) => {
    await CommonActions.isButtonDeactive(button)
})

Then('{string} butonuna tiklanir', async (button) => {
    await CommonActions.butonaTiklaTekilIslev(button)
})

Then('{string} butonuna cift tiklanir', async (button) => {
    await CommonActions.butonaCiftTiklaTekilIslev(button)
})

Then('{string} butonu gorunurse tiklanir', async (button) => {
    await CommonActions.butonuGorunurseTiklanir(button)
})

Then('{string} butonuna tiklanir - loading mask olmadan', async (button) => {
    await CommonActions.butonaTiklaTekilIslevWaitsiz(button)
})

Then('{string} elementine tiklanir', async (elementPath) => {
    await CommonActions.clickElement(elementPath)
})

Then('{string} elementine cift tiklanir', async (elementPath) => {
    await CommonActions.dblClickElement(elementPath)
})

Then('{string} elementine sag tiklanir', async (elementPath) => {
    await CommonActions.rightClickElement(elementPath)
})

Then('{string} elementi gorunurse tiklanir', async (elementPath) => {
    await CommonActions.clickElementIfExist(elementPath)
})

Then('{string} elementi gorunurse cift tiklanir', async (elementPath) => {
    await CommonActions.dblClickElementIfExist(elementPath)
})

Then('{string} elementine {string} degeri ile tiklanir', async (elementPath, value) => {
    await CommonActions.clickElementWithValue(elementPath, value)
})

Then('{string} elementine {string} degeri ile cift tiklanir', async (elementPath, value) => {
    await CommonActions.dblClickElementWithValue(elementPath, value)
})

Then('{string} elementine {string} degeri ile ulasilir ve degeri temp dataya {string} olarak yazdirilir', async (elementPath, value, key) => {
    await CommonActions.accessElementWithValueAndWriteElementValueToTempData(elementPath, value, key)
})

Then('{string} elementine {string} icerisinden {string} degeri ile tiklanir', async (elementPath, data, value) => {
    await CommonActions.clickElementByDataWithValue(elementPath, data, value)
})

Then('{string} elementine {string} icerisinden {string} degeri ile ulasilir ve goruntulendigi kontrol edilir', async (elementPath, data, value) => {
    await CommonActions.accessElementByDataWithValueAndControl(elementPath, data, value)
})

Then('{string} textine tiklanir', async (text) => {
    await CommonActions.clickWithText(text)
})

Then('{string} textine {string} indisi ile tiklanir', async (text, index) => {
    await CommonActions.clickWithTextByIndex(text, index)
})

Then('{string} textine cift tiklanir', async (text) => {
    await CommonActions.dblClickWithText(text)
})

Then('{string} texti varsa tiklanir', async (text) => {
    await CommonActions.clickWithTextIfExist(text)
})

Then('{string} texti varsa cift tiklanir', async (text) => {
    await CommonActions.dblClickWithTextIfExist(text)
})

Then('{string} icerisinden {string} degerine sag tiklanir', async (data, value) => {
    await CommonActions.rightClickDataElement(data, value)
})

Then('{string} icerisinden {string} degerine tiklanir', async (data, value) => {
    await CommonActions.clickDataElement(data, value)
})

Then('{string} icerisinden {string} degerinin {string} inci elementine tiklanir', async (data, value, index) => {
    await CommonActions.clickDataElement(data, value, index)
})

Then('{string} icerisinden {string} degerine cift tiklanir', async (data, value) => {
    await CommonActions.dblClickDataElement(data, value)
})

Then('{string} icerisinden {string} degeri varsa tiklanir', async (data, value) => {
    await CommonActions.clickDataElementIfExist(data, value)
})


Then('{string} alanina {string} yazilir', async (element, text) => {
    await CommonActions.sendType(element, text)
})

Then('{string} alanina varsa {string} yazilir', async (element, text) => {
    await CommonActions.sendTypeIfExist(element, text)
})

Then('{string} alanina {int} gun oncenin tarihi yazilir', async (element, day) => {
    await CommonActions.sendTypeDayBeforeDate(element, day)
})

Then('{string} alanina {int} gun oncenin tarihi ve saati yazilir', async (element, day) => {
    await CommonActions.sendTypeDayBeforeDateAndHour(element, day)
})

Then('{string} alanina bugunun tarihi yazilir', async (element) => {
    await CommonActions.sendTypeTodayDate(element)
})

Then('{string} alanina yarinin tarihi yazilir', async (element) => {
    await CommonActions.sendTypeTomorrowDate(element)
})

Then('{string} alanina simdiki saat yazilir', async (element) => {
    await CommonActions.sendTypePresentTime(element)
})

Then('{string} alani varsa bugunun tarihi yazilir', async (element) => {
    await CommonActions.sendTypeTodayDateIfExists(element)
})

Then('{string} alani varsa simdiki saat yazilir', async (element) => {
    await CommonActions.sendTypePresentTimeIfExists(element)
})

Then('{string} alanina bugunun tarihi ve saati yazilir', async (element) => {
    await CommonActions.sendTypeTodayDateAndNowTime(element)
})

Then('{string} alanina {string} ile random deger yazilir', async (element, text) => {
    await CommonActions.sendTypeWithRandomValue(element, text)
})

Then('{string} alanina {string} icerisinden {string} ile random deger yazilir', async (element, data, value) => {
    await CommonActions.sendTypeDataWithRandomValue(element, data, value)
})

Then('{string} alanina {string} icerisinden {string} degeri yazilir', async (element, data, value) => {
    await CommonActions.sendTypeData(element, data, value)
})

Then('{string} alani varsa {string} icerisinden {string} degeri yazilir', async (element, data, value) => {
    await CommonActions.sendTypeDataElementIfExist(element, data, value)
})

Then('{string} locator checkbox elementinin {string} oldugu kontrol edilir', async (path, check) => {
    await CommonActions.locatorCheckboxElementIsChecked(path, check)
})

Then('{string} locator checkbox elementinin durumu {string} degilse tikla', async (path, check) => {
    await CommonActions.locatorCheckboxElementIfCheckAndClick(path, check)
})

Then('{string} listesi uzerinden {string} degeri secilir', async (element, value) => {
    await CommonActions.selectValueElement(element, value)
})

Then('{string} listesi varsa uzerinden {string} degeri secilir', async (element, value) => {
    await CommonActions.selectValueElementIfExist(element, value)
})

Then('{string} listesi {string} icerisinden {string} degeri secilir', async (element, data, value) => {
    await CommonActions.selectDataValueElement(element, data, value)
})

Then('{string} listesi varsa {string} icerisinden {string} degeri secilir', async (element, data, value) => {
    await CommonActions.selectDataValueElementIfExist(element, data, value)
})

Then('{string} elementi varsa tiklanir', async (path) => {
    await CommonActions.tryWaitAndClickElement(path)
})

Then('{string} alani temizlenir', async (path) => {
    await CommonActions.clear(path)
})

Then('{string} gorunurse {string} klavye aksiyonu girilir', async (text, key) => {
    await CommonActions.ifExistTextOnTheScreenSendKeyboardAction(text, key)
})

Then('{string} gorunurse {string} butonuna tiklanir - loading mask olmadan', async (text, button) => {
    await CommonActions.ifExistTextOnTheScreenClickButtonWithoutLoadingMask(text, button)
})

Then('{string} gorunurse {string} butonuna tiklanir', async (text, button) => {
    await CommonActions.ifExistTextOnTheScreenClickButton(text, button)
})

Then('{string} gorunurse {string} butonuna cift tiklanir', async (text, button) => {
    await CommonActions.ifExistTextOnTheScreenDblClickButton(text, button)
})

Then('{string} textinin gorunur oldugu kontrol edilir', async (text) => {
    await CommonActions.appearTextOnTheScreen(text)
})

Then('{string} elementinin textinin {string} oldugu kontrol edilir', async (button, text) => {
    await CommonActions.checkTheTextOfLocator(button, text)
})

Then('{string} textinin {string} indexinin gorunur oldugu kontrol edilir', async (text, index) => {
    await CommonActions.appearTextOnTheScreenWithIndex(text, index)
})

Then('{string} icerisinden {string} degerinin gorunur oldugu kontrol edilir', async (data, value) => {
    await CommonActions.appearTextDataOnTheScreen(data, value)
})


Then('{string} icerisinden {string} degerinin gorunur olmadigi kontrol edilir', async (data, value) => {
    await CommonActions.dontAppearTextDataOnTheScreen(data, value)
})

Then('{string} textinin gorunur olmadigi kontrol edilir', async (text) => {
    await CommonActions.dontAppearTextOnTheScreen(text)
})

Then('{string} texti gorunurse testi durdur', async (text) => {
    await CommonActions.isTextVisibleThrow(text)
})

Then('{string} alaninin degeri temp dataya {string} olarak yazdirilir', async (path, key) => {
    await CommonActions.writeAreaValueToTempData(path, key)
})

Then('{string} elementinin degeri temp dataya {string} olarak yazdirilir', async (path, key) => {
    await CommonActions.writeElementValueToTempData(path, key)
})

Then('{string} elementinin degeri {string} icerisinden {string} olana tiklanir', async (path, data, value) => {
    await CommonActions.clickElementByDataValue(path, data, value)
})

Then('{string} alaninda {string} yazan objeye tikla', async (xpathKey, key) => {
    await CommonActions.clickByTextOnTheObject(xpathKey, key)
})

Then('{string} alaninda {string} yazisi gorulur', async (xpathKey, text) => {
    await CommonActions.appearTextOnTheObject(xpathKey, text)
})

Then('{string} alaninda {string} degiskeninin degeri gorulur', async (xpathKey, text) => {
    await CommonActions.appearObjectValueOnTheObject(xpathKey, text)
})

Then('{string} elementinin uzerine gelinir', async (xpathHover) => {
    await CommonActions.hoverOver(xpathHover)
})

Then('{string} elementi goruntulenene kadar kaydir', async (path) => {
    await CommonActions.scrollToElement(path)
})

Then('{string} elementi goruntulenene kadar bekle', async (path) => {
    await CommonActions.waitUntilVisible(path)
})

Then('{string} elementi kaybolana kadar bekle', async (path) => {
    await CommonActions.waitUntilUnvisible(path)
})

Then('{string} elementi uzerinde beklenir ve {string} yazisina tiklanir', async (xpathKey, key) => {
    await CommonActions.hoverAndWaitAndClickElementWithText(xpathKey, key)
})

Then('{string} elementinin gorunur oldugu kontrol edilir', async (path) => {
    await CommonActions.checkElementIsVisible(path)
})

Then('{string} elementi uzerinde {string} elementinin gorunur oldugu kontrol edilir', async (xpathKey1, xpathKey2) => {
    await CommonActions.controlElementOnTheObject(xpathKey1, xpathKey2)
})

Then('{string} elementi uzerinde {string} yazan texte tiklanir', async (xpathKey, key) => {
    await CommonActions.clickByTextOnTheObject(xpathKey, key)
})

Then('{string} elementi uzerinde {string} yazan texte cift tiklanir', async (xpathKey, key) => {
    await CommonActions.dblClickByTextOnTheObject(xpathKey, key)
})

Then('{string} elementi uzerinde {string} icerisinden {string} yazan texte cift tiklanir', async (xpathKey, data, key) => {
    await CommonActions.dblClickDataByTextOnTheObject(xpathKey, data, key)
})

Then('{string} basligi altinda {string} degerinin gorunur oldugu kontrol edilir', async (title, text) => {
    await CommonActions.appearTextUnderTitle(title, text)
})

Then('{string} basligi altinda {string} icerisinden {string} degerinin gorunur oldugu kontrol edilir', async (title, data, key) => {
    await CommonActions.appearTextDataUnderTitle(title, data, key)
})

Then('{string} alani uzerinde {string} icerisinden {string} degerinin gorunur oldugu kontrol edilir', async (path, data, key) => {
    await CommonActions.appearTextDataOnTheArea(path, data, key)
})

Then('{string} alani uzerinde {string} degerinin gorunur oldugu kontrol edilir', async (path, value) => {
    await CommonActions.appearTextOnTheArea(path, value)
})

Then('{string} elementi uzerinde {string} degerinin gorunur oldugu kontrol edilir', async (path, key) => {
    await CommonActions.appearTextOnTheObject(path, key)
})

Then('{string} elementi uzerinde {string} icerisinden {string} degerinin gorunur oldugu kontrol edilir', async (path, data, key) => {
    await CommonActions.appearTextDataOnTheObject(path, data, key)
})

Then('{string} elementi uzerinde {string} icerisinden {string} degerinin gorunur olmadigi kontrol edilir', async (path, data, key) => {
    await CommonActions.dontAppearTextDataOnTheObject(path, data, key)
})

Then('{string} elementi uzerinde {string} degerinin gorunur olmadigi kontrol edilir', async (path, key) => {
    await CommonActions.disappearTextOnTheObject(path, key)
})

Then('{string} yazan {int} inci elemente tiklanir', async (text, int) => {
    await CommonActions.clickByTextWithIndex(text, int)
})

Then('{string} yazan {int} inci elemente cift tiklanir', async (text, int) => {
    await CommonActions.dblClickByTextWithIndex(text, int)
})

Then('{string} elementi uzerinde {string} yazisi gorulur', async (xpathKey, text) => {
    await CommonActions.appearTextOnTheObject(xpathKey, text)
})

Then('{string} elementi uzerinde {string} yazisi gorulmez', async (xpathKey, text) => {
    await CommonActions.disappearTextOnTheObject(xpathKey, text)
})

Then('{string} klavye aksiyonu girilir', async (buttonText) => {
    await CommonActions.sendKeyboardAction(buttonText)
})

Then('{string} alanina {string} klavye aksiyonu girilir', async (string, buttonText) => {
    await CommonActions.sendKeyboardActionToElement(string, buttonText)
})

Then('Klavyeden {string} metni girilir', async (text) => {
    await CommonActions.sendKeyboardKey(text)
})

Then('{string} icin seceneklerden {string} secilir', async (label, choice) => {
    await CommonActions.chooseRadioButtonWithLabel(label, choice)
})

Then('{string} butonunun {string} oldugu kontrol edilir', async (button, activityStatus) => {
    await CommonActions.butonunAktifOlduguKontrolEdilir(button, activityStatus)
})

Then('{string} alanina {string} file upload edilir', async (label, file) => {
    await CommonActions.uploadFileToArea(label, file)
})

Then('{string} elementi uzerinde {string} texti gorulur', async (xpathKey, text) => {
    await CommonActions.appearObjectTextOnTheObject(xpathKey, text)
})

Then('{string} elementi uzerinde {string} texti gorulmez', async (xpathKey, text) => {
    await CommonActions.notAppearObjectTextOnTheObject(xpathKey, text)
})

Given('{string} select elementinden {string} degeri secilir', async (path, text) => {
    await CommonActions.chooseItemOnTheSelectElementByVisibleText(path, text)
})

Given('{string} select elementinden {string} data degeri secilir', async (path, text) => {
    await CommonActions.chooseItemOnTheSelectElementByVisibleTextData(path, text)
})

Then('{string} alanina {string} teker teker yazilir', async (xpathKey, key) => {
    await CommonActions.slowlySendType(xpathKey, key)
})

Then('{string} alanina {string} datasi teker teker yazilir', async (xpathKey, key) => {
    await CommonActions.slowlySendTypeData(xpathKey, key)
})

Then('Sayfa uzerinde {string} data yazisi gorulur', async (text) => {
    await CommonActions.appearTextDataOnTheScreen(text)
})

Then('Acilan sayfanin URL adresinin {string} oldugu kontrol edilir', async (urlKey) => {
    await CommonActions.assertTheURL(urlKey)
})

Then('Captcha\'yi kabul et', async () => {
    await CommonActions.handleCaptcha()
})

Then('Cookie kabul et', async () => {
    await CommonActions.handleCookieAccept()
})

Then('Gidis ve donus tarihleri secilir', async () => {
    await CommonActions.selectDepartureAndReturnDates()
})
Given('Rastgele TC Kimlik numarası üret ve {string} olarak kaydet', async (key) => {
    await CommonActions.generateAndSaveTCNo(key)
})

Then('Konum bildirimini kabul et', async () => {
    await CommonActions.handleLocationPermission()
})

Then('Yolcu sayisini {string} olarak belirle', async (sayi) => {
    await CommonActions.setPassengerCount(sayi)
})

Then('En uygun bilet secilir', async () => {
    await CommonActions.selectCheapestFlight()
})

Then('{string} gorunurse {string} elementine {int} kere tiklamayi dene', async (retryCount, text, button) => {
    await CommonActions.retryClickButtonIfTextExists(text, button, retryCount)
})

Then('Sayfa dogru yuklenene kadar dene', async () => {
    await CommonActions.waitForPageLoadAndRetry()
})

Then('{string} secimi yapilir', async (paket) => {
    await CommonActions.selectPackageType(paket)
})

Then('Toplam sayisi {string} adet olan tum yolcularin bilgilerini doldur', async (sayi) => {
    await CommonActions.fillAllPassengerInfo(sayi)
})

Then('Tum yolcular icin {string} adet koltuk secimi yapilir', async (sayi) => {
    await CommonActions.selectSeatsForAllPassengers(sayi)
})

Then('{string} butonunun gorunur oldugu kontrol edilir', async (button) => {
    await CommonActions.butonunGorunurOlduguKontrolEdilir(button)
})

Then('Sayfanin en altina inilir', async () => {
    await CommonActions.scrollToBottom()
})

Then('Butonlardan {string} secilir ve kontrol edilir', async (sehir) => {
    await CommonActions.selectAndVerifyCity(sehir)
})

Then('Combo kismindan {string} secilir ve {string} secilerek kontrol yapilir', async (sehir, ilce) => {
    await CommonActions.selectCityAndDistrictAndVerify(sehir, ilce)
})

Then('Bir onceki sayfaya geri donulur', async () => {
    await CommonActions.navigateBack()
})
