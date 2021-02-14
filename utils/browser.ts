import { BrowserOptions, ChromeArgOptions, LaunchOptions } from 'puppeteer'
import { ImageOptions, ResourceOptions } from '../typings/types'

const browser = require('puppeteer')

export default class BrowserSession {
    private browser
    private page

    /**
     * Obtains browser and page object on bootstrap
     */
    async setup(options?: LaunchOptions & ChromeArgOptions & BrowserOptions): Promise<void> {
        this.browser = await browser.launch(process.env.DEBUG ? options : {})
        this.page = await this.browser.newPage()
    }

    /**
     * Creates page screenshot
     */
    async createScreenshot(
        url: string,
        imageOptions: ImageOptions,
        resourceOptions: ResourceOptions
    ): Promise<Buffer | string | void> {
        // set the size of the viewport, so our screenshot will have the desired size
        await this.page.setViewport(imageOptions)
        await this.page.goto(url, { waitUntil: 'domcontentloaded' })
        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browser on teardown
     */
    async teardown(): Promise<void> {
        this.browser.close()
    }
}
