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
        headless: true,
        slowMo: 40,
        devtools: false,
        executablePath: './node_modules/puppeteer/.local-chromium/win64-848005/chrome-win/chrome.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    pageOptions: {
        waitUntil: 'domcontentloaded',
    },
}
