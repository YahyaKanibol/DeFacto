const stageJson = require('../data/stage_key')

const defactoDataJson = require('../tests/fixtures/defacto.json')

class Constants {
    async getVariable(key, ...args) {
        const value = await stageJson.elements[key]
        if (typeof value === 'function') {
            return value(...args)
        }
        return value
    }

    getData() {
        let environment = this.getEnv()
        switch (environment) {
            case 'defacto':
                return defactoDataJson
            default:
                throw new Error(`Geçersiz ortam: ${environment}`)
        }
    }

    getTestDataObject(reg) {
        let testData = this.getData().TestData[`${reg}`]
        return testData
    }

    getTestData(reg, data) {
        let testData = this.getData().TestData[`${reg}`][`${data}`]
        return testData
    }

    logIn(logInData = null) {
        let variable = logInData ? this.getData()?.Parameters[`${logInData}`] : this.getData()?.Parameters
        return variable
    }

    getEnv() {
        let environment = process.env.ENVIRONMENT
        return environment
    }

    getUrl() {
        let url = this.getData().url
        return url
    }
}

module.exports = new Constants()
