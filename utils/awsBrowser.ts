import chromium from 'chrome-aws-lambda'

import { ImageOptions, PageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, toBoolean, toFormatString } from './commons'
import { CONFIG } from './config'

export default class AwsBrowserSession {
    /**
     * Current chromium browser instance
     * @private
     */
    private browser
    /**
     * Current page instance
     * @private
     */
    private page

    /**
     * Obtains browser and page object on bootstrap
     * @param options initial input
     */
    async setup(options?): Promise<void> {
        const browserOptions = mergeProps(
            toBoolean(process.env.CHROME_EMBEDDED) ? CONFIG.browserOptions.prod : CONFIG.browserOptions.dev,
            options
        )

        console.log(`\n>>> Browser options=${toFormatString(browserOptions)}`)

        // Launches the Chromium browser.
        this.browser = await chromium.puppeteer.launch({
            args: [
                ...chromium.args,
                '--hide-scrollbars',
                '--disable-web-security',
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--headless',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--hide-scrollbars',
                '--disable-web-security',
            ],
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
        })
        this.page = await this.browser.newPage()
    }

    /**
     * Creates page screenshot
     * @param url initial input url {@link string} to fetch from
     * @param imageOptions initial input {@link ImageOptions}
     * @param resourceOptions initial input {@link ResourceOptions}
     * @param pageOptions initial input {@link PageOptions}
     */
    async createScreenshot(
        url: string,
        imageOptions: ImageOptions,
        resourceOptions: ResourceOptions,
        pageOptions: PageOptions
    ): Promise<Buffer | string | void> {
        await this.page.setViewport(imageOptions)
        await this.page.goto(url, pageOptions)
        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browser session on teardown
     */
    async teardown(): Promise<void> {
        if (this.page) await this.page.close()
        if (this.browser) await this.browser.close()
    }
}
