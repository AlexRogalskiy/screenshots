import { Browser } from 'puppeteer'

import { ChromeBrowserOptions, ImageOptions, PageOptions, ResourceOptions } from '../typings/types'
import { toFormatString } from './commons'

/**
 * Base browser session class
 */
export default abstract class BaseBrowserSession {
    /**
     * Current chromium browser
     * @private
     */
    protected browser: Browser

    /**
     * Base browser session constructor by input {@link ChromeBrowserOptions}
     * @constructor initial input {@link ChromeBrowserOptions} to operate by
     */
    protected constructor(private readonly options: ChromeBrowserOptions) {
        console.log(`>>> Initializing browser context with options => ${toFormatString(options)}`)
    }

    /**
     * Creates browser session
     */
    async setup(): Promise<void> {
        this.browser = await this.createBrowser(this.options)
    }

    /**
     * Creates new screenshot by input parameters
     * @param url initial input {@link string} url to fetch from
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
        const page = await this.browser.newPage()

        await page.setViewport(imageOptions)
        await page.goto(url, pageOptions)

        //await this.page.waitForFunction('window.done === true')
        return await page.screenshot(resourceOptions)
    }

    /**
     * Closes browser session
     */
    async teardown(): Promise<void> {
        console.log('Closing browser session...')

        if (this.browser) await this.browser.close()
    }

    /**
     * Returns {@link Browser} instance by input parameters
     * @param options initial input {@Link ChromeBrowserOptions} to operate by
     */
    protected abstract createBrowser(options: ChromeBrowserOptions): Promise<Browser>
}
