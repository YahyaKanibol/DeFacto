const { expect } = require("playwright/test")
const { request } = require('playwright')
const { readTempData } = require("../../support/utils/CommonUtil")

class ApiBase {
    async createRequestContext() {
        const client = await request.newContext({
            ignoreHTTPSErrors: true
        })
        return client
    }

    async makeRequest(method, url, options = {}, isLoginRequest = false) {
        const client = await this.createRequestContext()

        if (!isLoginRequest) {
            const cookie = await readTempData('cookie')
            options.headers = {
                ...options.headers,
                Cookie: cookie
            }
        }

        const response = await client[method](url, options)
        const responseBody = await response.json() // Burada yanıtı hemen kullanıyoruz...

        //todos: Bu alan ready2 için tekrar kontrol edilecektir.
        expect(response.status()).toBe(200)
        expect(responseBody).not.toHaveProperty('exception')

        await client.dispose() // İşlem tamamlandıktan sonra client'ı kapatıyoruz
        return [response, responseBody]
    }
}


module.exports = new ApiBase()