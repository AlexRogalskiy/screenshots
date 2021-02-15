import { BrowserOptions, ChromeArgOptions, LaunchOptions } from 'puppeteer'
import { ImageOptions, PageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, toBoolean, toFormatString } from './commons'
import { CONFIG } from './config'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const browser = require('puppeteer')

export default class BrowserSession {
    private browser
    private page

    /**
     * Obtains browser and page object on bootstrap
     */
    async setup(options?: LaunchOptions & ChromeArgOptions & BrowserOptions): Promise<void> {
        const browserOptions: ImageOptions = mergeProps(
            toBoolean(process.env.DEBUG) ? CONFIG.browserOptions.dev : CONFIG.browserOptions.prod,
            options
        )

        console.log(`Browser options=${toFormatString(browserOptions)}`)

        this.browser = await browser.launch(browserOptions)
        this.page = await this.browser.newPage()
    }

    /**
     * Creates page screenshot
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
     * Closes browser on teardown
     */
    async teardown(): Promise<void> {
        this.browser.close()
    }
}
