import { Browser, Page } from 'puppeteer'

import { ChromeBrowserOptions, ImageOptions, PageOptions, ResourceOptions } from '../typings/types'
import { mergeProps, separator, toBoolean, toFormatString } from './commons'
import { CONFIG } from './config'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const browserSession = require('puppeteer')

export default class BrowserSession {
    /**
     * Mock response data
     * @private
     */
    private static mockData = JSON.stringify({
        data: {
            ships: [
                {
                    active: true,
                    class: 12345678,
                    name: 'Puppeteer is not a SpaceX Ship!!',
                    image: 'https://bit.ly/2xP93Pd',
                    id: 'PUPPETEER',
                    year_built: 2017,
                    type: 'Browser Automation Tool',
                },
            ],
        },
    })
    /**
     * Current chromium browserSession instance
     * @private
     */
    private browser: Browser
    /**
     * Current page instance
     * @private
     */
    private page: Page

    /**
     * Obtains browserSession and page object on bootstrap
     * @param options initial input {@link ChromeBrowserOptions}
     */
    async setup(options?: ChromeBrowserOptions): Promise<void> {
        const browserOptions: ChromeBrowserOptions = mergeProps(
            toBoolean(process.env.CHROME_EMBEDDED) ? CONFIG.browserOptions.prod : CONFIG.browserOptions.dev,
            options
        )

        console.log(`>>> Browser options=${toFormatString(browserOptions)}`)

        // Launches the Chromium browserSession.
        this.browser = await browserSession.launch(browserOptions)
        this.page = await this.browser.newPage()
    }

    /**
     * Logs browserSession certificates
     */
    async logSecurityDetails(): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        await this.page.on('response', async response => {
            const cert = await response.securityDetails()
            console.log({
                ...cert,
                _validFrom: new Date(cert._validFrom * 1000),
                _validTo: new Date(cert._validTo * 1000),
            })
        })
    }

    /**
     * Logs browserSession response
     */
    async logResponse(): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        await this.page.on('response', async response => {
            console.log(separator(120))
            console.log()
            console.log('\nHeaders: \n', response.headers())
            console.log()
            console.log(separator(120))
        })
    }

    /**
     * Logs browserSession request
     */
    async logRequest(): Promise<void> {
        this.page.on('request', async request => {
            const isGraphQL = request.url().includes('/graphql')
            const isPOST = request.method() === 'POST'

            // Step1: Enable request interception
            await this.page.setRequestInterception(true)

            if (isGraphQL && isPOST) {
                console.log('\n 🚀 We got one!: ', request.url())
                await request.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: BrowserSession.mockData,
                })
            } else {
                request.continue()
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
        resourceOptions: ResourceOptions,
        pageOptions: PageOptions
    ): Promise<Buffer | string | void> {
        await this.page.setViewport(imageOptions)
        await this.page.goto(url, pageOptions)
        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browserSession session on teardown
     */
    async teardown(): Promise<void> {
        console.log('Closing remote browserSession session...')

        if (this.page) await this.page.close()
        if (this.browser) await this.browser.close()
    }
}
