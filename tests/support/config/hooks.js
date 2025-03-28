const { setParallelCanAssign, Before, BeforeAll, AfterAll, After, formatterHelpers, Status, setDefaultTimeout } = require('@cucumber/cucumber')
const WebBrowser = require('../manager/Browser')
const fse = require('fs-extra')
const fs = require('fs').promises
const Log = require('../logger/Log')
const CommonUtil = require('../utils/CommonUtil')
const { handleResponse } = require('./networkResponseHandler')
const { BeforeStep, AfterStep } = require('@cucumber/cucumber')
const chalk = require('chalk')
const { expect } = require('playwright/test')

const timeInMin = 1000
let browser
let featureNumber
let currentStep

// Timeout ayarını global olarak en üstte yapıyoruz
setDefaultTimeout(Number.parseInt(process.env.TEST_TIMEOUT || '30', 10) * timeInMin)

// Ensure scenarios from the same feature are run by one worker
setParallelCanAssign(function (pickleInQuestion, picklesInProgress) {
    const featureName = pickleInQuestion.uri // Get the feature file's name

    // Check if there are scenarios from the same feature already running
    const isFeatureRunning = picklesInProgress.some((pickle) => pickle.uri === featureName)

    // If any scenario from this feature is already running, don't assign it to another worker
    if (isFeatureRunning) {
        return false // Don't assign to another worker
    }

    // Otherwise, allow the scenario to be assigned
    return true
})

// Tarayıcıyı başlat
BeforeAll(async function () {
    browser = await WebBrowser.launch()
})
BeforeStep(async function (step) {
    console.log(chalk.green(`[${featureNumber}] Step is running: ${step.pickleStep.text}`))
    currentStep = step; // Mevcut adımı kaydet
    
    // Her adım başında response listener'ı yeniden ekle
    global.page.on('response', (response) => {
        const stepId = currentStep?.pickleStep?.id;
        const stepName = currentStep?.pickleStep?.text;
        handleResponse(response, stepId, stepName);
    });
})

// Her senaryo için yeni bir tarayıcı context'i ve sayfası oluştur
Before(async function ({ pickle, gherkinDocument }) {
    const featureName = gherkinDocument.feature.name
    console.log(featureName)

    const numberMatch = featureName.match(/(\d+)/)
    featureNumber = numberMatch ? numberMatch[0] : 'no-number'

    global.testName = featureName
    await CommonUtil.createTempFile(featureName)

    Log.testBegin(`${pickle.name}`)

    global.context = await browser.newContext({
        viewport: process.env.DEBUG === 'true' ? null : { width: 1920, height: 1080 },
        // viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        recordVideo: process.env.RECORD_VIDEO === 'true' ? { dir: './test-results/videos' } : undefined,
        headless: true
        // storageState: tempData.storage ? tempData.storage : []
    })

    // Birden fazla site için konum izni verme
    const sites = ['https://www.google.com']

    for (const site of sites) {
        await context.grantPermissions([], { origin: site })
    }

    await global.context.tracing.start({ screenshots: true, snapshots: true })
    global.page = await global.context.newPage()

    // Set the initial browser title to the test name
    await global.page.evaluate((testName) => {
        document.title = testName
    }, global.testName)

    // Listen for the load event to reset the title
    global.page.on('load', async () => {
        await global.page.evaluate((testName) => {
            document.title = testName // Reset title to test name on page load
        }, global.testName)
    })


    const cookies = await global.context.cookies()
    await Promise.all(cookies.map((cookie) => global.context.clearCookies(cookie)))

    // Cookie'leri ayarlama (Eğer önceden kaydedilmiş cookie'leriniz varsa)
    // await global.context.addCookies(tempData.cookies ? tempData.cookies : []);

    // Eğer parent senaryosu geçmemişse child senaryoyu "Skipped" olarak işaretle
    const isFirstScenarioPassed = await CommonUtil.readTempData('isFirstScenarioPassed')
    const hasChildTag = pickle.tags.some((tag) => tag.name === '@child')
    if (hasChildTag && isFirstScenarioPassed === false && process.env.DEBUG === 'false') {
        let failedScenarioName = await CommonUtil.readTempData('failedScenario')

        // Allure'a senaryonun "Skipped" olduğunu bildirmek
        this.attach(`Skipping scenario due to parent failure: ${failedScenarioName}`, 'text/plain')
        return 'skipped' // Cucumber'a "Skipped" olarak bildirme
    }
})

// Her senaryodan sonra temizlik işlemleri
After(async function ({ result, pickle, gherkinDocument }) {
    const { line } = formatterHelpers.PickleParser.getPickleLocation({ gherkinDocument, pickle })
    let status = result.status
    const scenario = pickle.name
    const videoPath = await global.page?.video()?.path()

    const hasParentTag = pickle.tags.some((tag) => tag.name === '@parent')
    if (status === Status.FAILED && hasParentTag) {
        await CommonUtil.writeTempData('isFirstScenarioPassed', false)
        await CommonUtil.writeTempData('failedScenario', scenario)
    } else if (status === Status.PASSED && hasParentTag) {
        await CommonUtil.writeTempData('isFirstScenarioPassed', true)
    }

    // Eğer senaryo başarısızsa ve parent senaryo başarısızsa, "Skipped" yap
    if (status === Status.FAILED && result.message.includes('skipping')) {
        status = Status.SKIPPED
        console.log('status set to skipped')
    }

    if (status === Status.FAILED) {
        const image = await global.page?.screenshot({ path: `./test-results/screenshots/${scenario} (${line}).png`, fullPage: true })
        this.attach(image, 'image/png')
        Log.error(`${scenario} - ${status}\n${result.message}`)
    }

    await global.page?.close()
    await global.context?.close()

    // Video işlemleri
    if (process.env.RECORD_VIDEO === 'true') {
        if (status === Status.FAILED) {
            fse.renameSync(videoPath, `./test-results/videos/${scenario}(${line}).webm`)
            this.attach(fse.readFileSync(`./test-results/videos/${scenario}(${line}).webm`), 'video/webm')
        } else {
            fse.unlinkSync(videoPath)
        }
    }

    Log.testEnd(`${scenario}`, status)
})
AfterStep(async function (step) {
    console.log(chalk.blue(`[${featureNumber}] Step finished: ${step.pickleStep.text}`))
    
    // Her adım sonunda response listener'ı kaldır
    global.page.removeListener('response', global.page.listeners('response')[0]);
    currentStep = null; // Temizle
})

AfterAll(async function () {
    try {
        await browser.close()
        console.log('Tarayıcı başarıyla kapatıldı.')
    } catch (error) {
        console.error('Tarayıcı kapatılırken bir hata oluştu:', error.message)
        console.error('Hata detayları:', error)
    }

    if (global.testName) {
        try {
            const version = await CommonUtil.readTempData('versiyon')
            await fs.writeFile('test-results/reports/allure-results/environment.properties', `Version=${version}`)
            console.log('Versiyon bilgisi başarıyla kaydedildi.')
        } catch (error) {
            console.error('Versiyon bilgisi yazılırken bir hata oluştu:', error.message)
            console.error('Hata detayları:', error)
        }
    }
})
