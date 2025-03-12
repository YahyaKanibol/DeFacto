class EnvUtil {
    static setEnv() {
        require('dotenv').config({
            path: process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env',
            override: process.env.TEST_ENV ? true : false,
        });
    }
}

module.exports = EnvUtil;
