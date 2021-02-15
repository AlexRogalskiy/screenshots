import { Browser, Page } from 'playwright-core'
import { chromium, LaunchOptions } from 'playwright-chromium'
import { BrowserContext } from 'playwright-core/types/types'

import { ImageOptions, PlayPageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, separator, toBoolean, toFormatString } from './commons'
import { CONFIG } from './config'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const chromium_browser = require('chromium')

export default class PlaywrightSession {
    /**
     * Current chromium browser instance
     * @private
     */
    private browser: Browser
    /**
     * Current chromium browser context
     * @private
     */
    private context: BrowserContext
    /**
     * Current page instance
     * @private
     */
    private page: Page

    /**
     * Obtains browser and page object on bootstrap
     * @param options initial input {@link LaunchOptions}
     */
    async setup(options?: LaunchOptions): Promise<void> {
        const browserOptions: LaunchOptions = mergeProps(
            toBoolean(process.env.CHROME_EMBEDDED) ? CONFIG.browserOptions.prod : CONFIG.browserOptions.dev,
            options
        )

        browserOptions.executablePath = chromium_browser.path

        console.log(`\n>>> Browser options=${toFormatString(browserOptions)}`)

        // Launches the Chromium browser.
        this.browser = await chromium.launch(browserOptions)
        this.context = await this.browser.newContext()
        this.page = await this.context.newPage()
    }

    /**
     * Creates new page with new context
     */
    async newContextPage(): Promise<Page> {
        const context = await this.browser.newContext()
        return await context.newPage()
    }

    /**
     * Logs browser response
     */
    async logResponse(): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        await this.page.on('response', async response => {
            const isGraphQL = response.url().includes('/graphql')
            const isPOST = response.request().method() === 'POST'

            if (isGraphQL && isPOST) {
                console.log('\n 🚀 We got one!: ', response.url())
                const data = await response.json()
                console.log(separator(120))
                console.table(data)
                console.log('\nHeaders: \n', response.headers())
                console.log()
                console.log(separator(120))
            }
        })
    }

    /**
     * Logs browser request
     */
    async logRequest(): Promise<void> {
        this.page.on('request', async request => {
            const isGraphQL = request.url().includes('/graphql')
            const isPOST = request.method() === 'POST'

            if (isGraphQL && isPOST) {
                console.log('\n 🚀 We got one!: ', request.url())
                console.log(request.headers())
            }
        })
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
        resourceOptions?: ResourceOptions,
        pageOptions?: PlayPageOptions
    ): Promise<Buffer | string | void> {
        await this.page.setViewportSize(imageOptions)
        await this.page.goto(url, pageOptions)
        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browser session on teardown
     */
    async teardown(): Promise<void> {
        if (this.page) await this.page.close()
        if (this.context) await this.context.close()
        if (this.browser) await this.browser.close()
    }
}
