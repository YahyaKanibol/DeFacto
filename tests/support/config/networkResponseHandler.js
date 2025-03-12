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

    // Ensure mevcutHatalar is always an array
    let mevcutHatalar = await CommonUtil.readTempData('responseHatalari');

    // Ensure mevcutHatalar is an array
    if (!Array.isArray(mevcutHatalar)) {
      mevcutHatalar = [];
    }

    // Hata kontrolü için benzersiz bir anahtar oluştur
    const errorKey = JSON.stringify({
      stepId,
      stepName,
      status,
      url,
      exceptionMessage: responseBody?.exception?.message
    });

    // Daha önce aynı hatanın kaydedilip kaydedilmediğini kontrol et
    const errorExists = mevcutHatalar.some(hata => 
      JSON.stringify({
        stepId: hata.stepId,
        stepName: hata.stepName,
        status: hata.status,
        url: hata.url,
        exceptionMessage: hata.responseBody?.exception?.message
      }) === errorKey
    );

    // Hata daha önce kaydedilmediyse ekle
    if (!errorExists && ((responseBody && responseBody.hasOwnProperty('exception')) || status >= 400)) {
      console.log(chalk.red(`Hata: İstek URL'si: ${url}`))
      console.log(chalk.redBright(`Hata: Response Body: ${JSON.stringify(responseBody)}`))
      console.log(mevcutHatalar)
      mevcutHatalar.push({
        stepId: stepId,
        stepName: stepName,
        status: status,
        url: url,
        responseBody: responseBody
      });
      console.log(mevcutHatalar)

      // Hatalar listesini güncelle
      await CommonUtil.writeTempData('responseHatalari', mevcutHatalar);
    }
  }
}

module.exports = {
  handleResponse
}
