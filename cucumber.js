const dotenv = require('dotenv');
const fsExtra = require('fs-extra');

const envFile = process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env';

dotenv.config({ path: envFile });

fsExtra.ensureDir('./test-results/reports');
fsExtra.remove('./test-results/screenshots');
fsExtra.remove('./test-results/videos');

const tags = process.env.TAGS//.split(' ').map(tag => `@${tag.trim()}`).join(' and ');

let options = [
    '--require ./tests/support/config/hooks.js',
    '--require **/**/steps/*.js',
    '--format rerun:./test-results/rerun.txt',
    '--publish-quiet true',
    '--format json:./test-results/reports/cucumber.json',
    `--parallel=${process.env.PARALLEL_THREAD}`,
    `--format-options '{"snippetInterface":"async-await"}'`,
    `--retry=${process.env.RETRIES}`,
    `--tags "not @ignore"`,
    `--tags "${tags}"`
].join(' ');

let runner = [
    './tests/features/',
    options,
].join(' ');

let rerun = [
    '@rerun.txt',
    options,
].join(' ');

module.exports = { runner, rerun };