const {Given, When, Then} = require('@cucumber/cucumber')

const homePage = require('../pages/HomePage');
const CommonActions = require('../pages/CommonActions');



Given('Ana sayfa acilir', async() => {
    await CommonActions.setContext("Normal")
    await homePage.goHomePage()
    await homePage.handleAllPopups()
});

Then('{string} email, {string} parola ile {string} datasını kullanarak giris yapar', async(username, password, data) => {
    await homePage.login(username, password, organization, data)
});

    