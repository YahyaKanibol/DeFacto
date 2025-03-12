const CommonUtil = require('../support/utils/CommonUtil');
const CommonActions = require('./CommonActions');
const DbQuery = require('./DbQuery');
const Constants = require('../../constants/Constants');



class HomePage {

    async goHomePage(){
        await page.goto(Constants.getUrl());
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
