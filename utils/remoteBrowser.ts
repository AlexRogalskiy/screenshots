import chromium from 'chrome-aws-lambda'
import { BrowserOptions, ChromeArgOptions, LaunchOptions } from 'puppeteer-core'

import { ImageOptions, PageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, toFormatString } from './commons'
import { CONFIG } from './config'

export default class RemoteBrowserSession {
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
    async setup(options?: LaunchOptions & ChromeArgOptions & BrowserOptions): Promise<void> {
        const browserOptions: LaunchOptions & ChromeArgOptions & BrowserOptions = mergeProps(
            CONFIG.browserOptions.prod,
            chromium,
            options
        )

        console.log(`\n>>> Browser options=${toFormatString(browserOptions)}`)

        // Launches the Chromium browser.
        this.browser = await chromium.puppeteer.launch(browserOptions)
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
        console.log('Closing remote browser session...')
        if (this.page) await this.page.close()
        if (this.browser) await this.browser.close()
    }
}
