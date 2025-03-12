const { readTempData } = require("../utils/CommonUtil");
const DateUtil = require("../utils/DateUtil");
const EnvUtil = require("../utils/EnvUtil");
const reporter = require('cucumber-html-reporter');

class CucumberReporter {
    static async generate() {
        // require('dotenv').config();
        EnvUtil.setEnv();
        const options = {
            brandTitle: "Acceptance Test Report",
            theme: 'bootstrap',
            jsonFile: 'test-results/reports/cucumber.json',
            output: 'test-results/reports/cucumber.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: false,
            columnLayout: 1,
            metadata: {
                "Execution Date": DateUtil.dateGenerator("DD/MM/YYYY", 0, 0, 0),
                "Base URL": process.env.BASE_URL,
                "Environment": process.env.ENVIRONMENT,
                "Browser": process.env.BROWSER,
                "Version": await readTempData("versiyon")
            }
        };
        reporter.generate(options);
    }
}

await CucumberReporter.generate();
