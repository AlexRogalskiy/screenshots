import { BrowserOptions, ChromeArgOptions, LaunchOptions } from 'puppeteer-core'
import { Browser, Page } from 'puppeteer'

import { ImageOptions, PageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, toFormatString } from './commons'
import { CONFIG } from './config'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const puppeteer = require('puppeteer')

export default class LocalBrowserSession {
    /**
     * Current chromium browser instance
     * @private
     */
    private browser: Browser
    /**
     * Current page instance
     * @private
     */
    private page: Page

    /**
     * Obtains browser and page object on bootstrap
     * @param options initial input
     */
    async setup(options?: LaunchOptions & ChromeArgOptions & BrowserOptions): Promise<void> {
        const browserOptions: LaunchOptions & ChromeArgOptions & BrowserOptions = mergeProps(
            CONFIG.browserOptions.dev,
            options
        )

        console.log(`\n>>> Browser options=${toFormatString(browserOptions)}`)

        // Launches the Chromium browser.
        this.browser = await puppeteer.launch(browserOptions)
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
        console.log('Closing local browser session...')

        if (this.page) await this.page.close()
        if (this.browser) await this.browser.close()
    }
}
