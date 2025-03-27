const CommonUtil = require('../support/utils/CommonUtil');
const CommonActions = require('./CommonActions');
const DbQuery = require('./DbQuery');
const Constants = require('../../constants/Constants');



class HomePage {

    async goHomePage(){
        await page.goto(Constants.getUrl());
    }

    async handleAllPopups() {
        // KVKK Pop-up kontrolü
        try {
            const kvkkPopup = await page.waitForSelector('#kvkk_notification >> div >> div:nth-child(2) >> a:nth-child(2)', {
                state: 'visible',
                timeout: 5000
            });
            if (kvkkPopup) {
                await kvkkPopup.evaluate(node => node.click());
                console.log('KVKK pop-up kapatıldı');
            }
        } catch (e) {
            console.log('KVKK pop-up görünmedi');
        }

        // Bildirim Pop-up kontrolü
        try {
            const notificationPopup = await page.waitForSelector('#ins-wrap-button-1580496494', {
                state: 'visible',
                timeout: 5000
            });
            if (notificationPopup) {
                await notificationPopup.click();
                console.log('Bildirim pop-up kapatıldı');
            }
        } catch (e) {
            console.log('Bildirim pop-up görünmedi');
        }

        // Üyelik Pop-up kontrolü
        try {
            const memberPopup = await page.waitForSelector('#ins-slide-page-0', {
                state: 'visible',
                timeout: 5000
            });
            if (memberPopup) {
                const closeButton = await page.waitForSelector('#close-button-1454703513202 >> span');
                await closeButton.evaluate(node => node.click());
                console.log('Üyelik pop-up kapatıldı');
            }
        } catch (e) {
            console.log('Üyelik pop-up görünmedi');
        }
    }

    async _loginBase(user, pw){
        await CommonActions.waitForLoadingMask();
        await CommonActions.appearTextOnTheScreen('Şimdi Giriş Yap')
        await CommonActions._type('input[name="email"]', user)
        await CommonActions._type('input[name="password"]', pw)
        await CommonActions.clickWithText('Şimdi Giriş Yap')
        await CommonActions.waitForLoadingMask();
    }



    async login(username, password, data) {
        let value, user, pw;
    
        if (data === 'Temp Data') {
            value = await CommonUtil.readTempData();
        } else if (data === 'VARSAYILAN') {
            value = Constants.logIn();
        } else {
            value = { username, password };
        }
    
        user = await (value[username] || username);
        pw = await (value[password] || password);

        await this._loginBase(user, pw);
    
        // Eğer gerekiyorsa yorum satırlarını yeniden açabilirsiniz
        // await CommonUtil.writeTempData('cookies', await global.context.cookies());
        // await CommonUtil.writeTempData('storage', await global.context.storageState());
    }
    
}

module.exports = new HomePage();
