const { chromium, firefox, webkit } = require("@playwright/test");
const BrowserConstants = require("../constants/BrowserConstants");


const browserOptions = {
    //slowMo: 50,
    args: [
        process.env.DEBUG === "true" ? "--start-maximized" : '--window-size=1440,900',
        process.env.DEBUG === "true" ? "" : "--headless",
        "--disable-extensions", 
        "--disable-plugins", 
        "--disable-notifications", 
        "--ignore-certificate-errors", 
        "--disable-gpu", 
        "--remote-allow-origins=*",
        "--disable-blink-features=ShadowDOMV0"],
    firefoxUserPrefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
    },
    headless: false,
    timeout: Number.parseInt(process.env.BROWSER_LAUNCH_TIMEOUT, 10),
    downloadsPath: "./test-results/downloads",
};

class Browser {
    static async launch() {
        const browserType = process.env.BROWSER;
        let browser;

        if (BrowserConstants.FIREFOX === browserType) {
            browser = await firefox.launch(browserOptions);
        } else if (BrowserConstants.WEBKIT === browserType) {
            browser = await webkit.launch(browserOptions);
        } else {
            browser = await chromium.launch(browserOptions);
        }

        return browser;
    }
}

module.exports = Browser;
