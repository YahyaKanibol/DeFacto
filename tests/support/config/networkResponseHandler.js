// tests/support/config/networkResponseHandler.js
const chalk = require('chalk')
const CommonUtil = require('../utils/CommonUtil')

async function handleResponse(response, stepId, stepName) {
  const requestType = response.request().resourceType()
  
  if (requestType === 'xhr') {
    const status = response.status()
    const url = response.url()
    let responseBody
    
    try {
      responseBody = await response.json()
      
      if (responseBody?.exception?.message === 'Oturum açılmamış.') {
        return
      }
    } catch (error) {
      try {
        responseBody = await response.text()
      } catch (innerError) {
        console.error(`Yanıt alınamadı. Hata: ${innerError.message}`)
      }
    }

    // Sadece konsola yazdırma işlemi yapılacak, kayıt işlemi yapılmayacak
    if ((responseBody && responseBody.hasOwnProperty('exception')) || status >= 400) {
      console.log(chalk.red(`Hata: İstek URL'si: ${url}`))
      console.log(chalk.redBright(`Hata: Response Body: ${JSON.stringify(responseBody)}`))
    }
  }
}

module.exports = {
  handleResponse
}
