import { Browser } from 'puppeteer'

import { ChromeBrowserOptions } from '../typings/types'
import BaseBrowserSession from './baseBrowserSession'
import { mergeProps } from './commons'
import { CONFIG } from './config'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const puppeteer = require('puppeteer')

/**
 * Local browser session class
 */
export default class LocalBrowserSession extends BaseBrowserSession {
    /**
     * Returns local {@link Browser} instance by input parameters
     * @param options initial input {@Link ChromeBrowserOptions} to operate by
     */
    protected async createBrowser(options: ChromeBrowserOptions): Promise<Browser> {
        return await puppeteer.launch(options)
    }

    /**
     * Returns new local {@link BaseBrowserSession}
     * @param options initial input {@Link ChromeBrowserOptions} to operate by
     */
    static async createSession(options?: ChromeBrowserOptions): Promise<BaseBrowserSession> {
        const browserOptions: ChromeBrowserOptions = mergeProps(CONFIG.browserOptions.dev, options)

        return new LocalBrowserSession(browserOptions)
    }
}
