import { ImageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, toBoolean, toFormatString } from './commons'
import { CONFIG } from './config'
import { Browser, Page } from 'playwright-core'
import { LaunchOptions } from "playwright-chromium/types/types";

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
// const browser = require('playwright-aws-lambda')
// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const { chromium } = require('playwright-chromium')

export default class PlaywrightSession {
    private browser: Browser
    private page: Page

    /**
     * Obtains browser and page object on bootstrap
     */
    async setup(options?: LaunchOptions): Promise<void> {
        const browserOptions: LaunchOptions = mergeProps(
            toBoolean(process.env.CHROME_EMBEDDED) ? CONFIG.browserOptions.dev : CONFIG.browserOptions.prod,
            options
        )

        console.log(`>>> Browser options=${toFormatString(browserOptions)}`)

        // Launches the Chromium browser.
        //this.browser = await browser.launchChromium(browserOptions)
        this.browser = await chromium.launch({ chromiumSandbox: false })
        // Downloads and activates a custom font
        // await browser.loadFont(
        //     'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf'
        // )
        const context = await this.browser.newContext()
        this.page = await context.newPage()
    }

    /**
     * Creates page screenshot
     */
    async createScreenshot(
        url: string,
        imageOptions: ImageOptions,
        resourceOptions: ResourceOptions
        //pageOptions: PageOptions
    ): Promise<Buffer | string | void> {
        await this.page.setViewportSize(imageOptions)
        await this.page.goto(url)
        //await this.page.goto(url, pageOptions)
        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browser on teardown
     */
    async teardown(): Promise<void> {
        await this.browser.close()
    }
}
