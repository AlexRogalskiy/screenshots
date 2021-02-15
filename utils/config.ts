import { ConfigOptions } from '../typings/types'

export const CONFIG: ConfigOptions = {
    locationOptions: {
        name: 'screenshot',
        path: 'images',
        extension: 'png',
    },
    imageOptions: {
        width: 800,
        height: 800,
    },
    resourceOptions: {
        fullPage: false,
        type: 'png',
        encoding: 'binary',
    },
    browserOptions: {
        dev: {
            headless: true,
            slowMo: 40,
            devtools: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--headless',
                '--disable-gpu',
                '--disable-dev-shm-usage',
            ],
            ignoreDefaultArgs: ['--disable-extensions'],
        },
        prod: {
            headless: true,
            slowMo: 40,
            devtools: false,
            executablePath: process.env.PUPPETEER_EXEC_PATH,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--headless',
                '--disable-gpu',
                '--disable-dev-shm-usage',
            ],
        },
    },
    pageOptions: {
        waitUntil: 'domcontentloaded',
    },
}
