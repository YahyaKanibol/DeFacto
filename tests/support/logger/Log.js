// const { ICreateAttachment } = require('@cucumber/cucumber/lib/runtime/attachment_manager');
const winston = require('winston');

const Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.uncolorize({ level: true, message: true, raw: true }),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.align(),
                winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
            ),
        }),
        new winston.transports.File({
            filename: 'test-results/logs/execution.log',
            format: winston.format.combine(
                winston.format.uncolorize({ level: true, message: true, raw: true }),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.align(),
                winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
            ),
        }),
    ],
});

const TEST_SEPARATOR = "##############################################################################";

class Log {
    static testBegin(scenario) {
        this.printLogs(`Scenario: ${scenario} - Started`, TEST_SEPARATOR);
    }
 
    static testEnd(scenario, status) {
        this.printLogs(`Scenario: ${scenario} - ${status}`, TEST_SEPARATOR);
    }

    static printLogs(msg, separator) {
        Logger.info(separator);
        Logger.info(`${msg.toUpperCase()}`);
        Logger.info(separator);
    }

    static info(message) {
        Logger.info(message);
    }

    static error(error) {
        Logger.error(error);
    }

    static attachText(attach, message) {
        Logger.info(message);
        attach(message);
    }
}

module.exports = Log;
