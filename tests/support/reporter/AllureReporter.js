const { CucumberJSAllureFormatter, AllureRuntime } = require('allure-cucumberjs')
const { Status } = require('allure-js-commons')
const CommonUtil = require('../utils/CommonUtil')

class AllureReporter extends CucumberJSAllureFormatter {
    constructor(options) {
        super(
            options,
            new AllureRuntime({
                resultsDir: 'test-results/reports/allure-results'
            }),
            {}
        )
    }

    // async onTestCaseFinished(data) {
    //     const currentTest = this.currentTestsMap.get(data.testCaseStartedId)
    //     // console.log('currentTest', currentTest)

    //     const testCaseStarted = this.testCaseStartedMap.get(data.testCaseStartedId)
    //     // console.log('testCaseStarted', testCaseStarted)

    //     const testCase = this.testCaseMap.get(testCaseStarted.testCaseId)
    //     // console.log('testCase', testCase)

    //     // const pickle = this.pickleMap.get(testCase.pickleId)
    //     console.log('pickle', pickle)

    //     const allureSteps = this.allureSteps.
    //     // console.log('allureSteps', allureSteps)


    //     // Feature ismini al
    //     const featureName = this.currentTestsMap.get(data.testCaseStartedId).info.labels.find((label) => label.name === 'feature').value
    //     // console.log('Feature Name:', featureName)

    //     let mevcutHatalar = await CommonUtil.readTempData("responseHatalari" ,featureName)
    //     if (!Array.isArray(mevcutHatalar)) {
    //         mevcutHatalar = []
    //     }


    //     for (const step of testCase.testSteps) {
    //         const stepId = step.pickleStepId
    //         const stepErrors = mevcutHatalar.filter((error) => error.stepId === stepId)
            
    //         console.log(step)

    //         if (stepErrors.length > 0) {
    //             // const stepName = pickle.steps.find((s) => s.id === stepId).text

    //             // allureStep.startStep(`${stepName}`)

    //             stepErrors.forEach((error) => {
    //                 const warningMessage = `Warning: URL: ${error.url}, Status: ${error.status}, Response: ${JSON.stringify(error.responseBody)}`
    //                 allureStep.addAttachment(`Warning - ${error.url}`, warningMessage, 'text/plain')
    //             })

    //             // allureStep.endStep("warning")
    //         }
    //     }

    //     super.onTestCaseFinished(data)
    // }
    
    // async onTestCaseFinishedx(data) {
    //     const currentTest = this.currentTestsMap.get(data.testCaseStartedId);
    //     if (!currentTest) {
    //         console.error("onTestCaseFinished", "current test not found", data);
    //         return;
    //     }
    //     const testCaseStarted = this.testCaseStartedMap.get(data.testCaseStartedId);
    //     if (!testCaseStarted) {
    //         console.error("onTestCaseFinished", "testCaseStarted event not found", data);
    //         return;
    //     }
    //     const testCase = this.testCaseMap.get(testCaseStarted.testCaseId);
    //     if (!testCase) {
    //         console.error("onTestCaseFinished", "testCase not found", data);
    //         return;
    //     }
    //     const pickle = this.pickleMap.get(testCase.pickleId);
    //     if (!pickle) {
    //         console.error("onTestCaseFinished", "pickle not found", data);
    //         return;
    //     }
        
    //     const testStepResults = this.testCaseTestStepsResults.get(testCaseStarted.id);
    //     if (testStepResults?.length) {
    //         // const worstTestStepResult = messages.getWorstTestStepResult(testStepResults);
    //         // currentTest.status = currentTest.isAnyStepFailed
    //         //     ? allure_js_commons_1.Status.FAILED
    //         //     : this.convertStatus(worstTestStepResult.status);
    //         // const message = this.exceptionFormatter(currentTest.status
    //         //     ? worstTestStepResult.message
    //         //     : "The test doesn't have an implementation.");
    //         // currentTest.statusDetails = { message };
            
    //         // Add warning attachments if there are matching errors
    //         const mevcutHatalar = // retrieve your mevcutHatalar list from the right place
    //         testStepResults.forEach((stepResult) => {
    //             const stepName = pickle.steps.find((s) => s.id === stepId).text
    //             const filteredErrors = mevcutHatalar.filter((error) => error.stepName === stepName);
    //             filteredErrors.forEach((error) => {
    //                 const warningMessage = error.message || "Warning without a specific message.";
    //                 const attachmentFileName = this.allureRuntime.writeAttachment(warningMessage, allure_js_commons_1.ContentType.TEXT);
    //                 currentTest.addAttachment(`Warning for step: ${stepName}`, {
    //                     contentType: allure_js_commons_1.ContentType.TEXT,
    //                 }, attachmentFileName);
    //             });
    //         });
    //     } else {
    //         currentTest.status = allure_js_commons_1.Status.PASSED;
    //     }
        
    //     currentTest.calculateHistoryId();
    //     currentTest.endTest(Date.now());
    //     this.currentTestsMap.delete(data.testCaseStartedId);
    // }
}

module.exports = AllureReporter
