import { BrowserOptions, ChromeArgOptions, LaunchOptions, PuppeteerLifeCycleEvent } from 'puppeteer-core'
import { LaunchOptions as PlayLaunchOptions } from 'playwright-chromium'

import { RouteOptions } from './domain-types'

import { IMAGE_ENCODING, IMAGE_TYPE } from '../src/constants/constants'

//--------------------------------------------------------------------------------------------------
/**
 * ImageContentType
 * @desc Type representing supported image contents
 */
export type ImageContentType = keyof typeof IMAGE_TYPE

/**
 * ImageEncodingType
 * @desc Type representing supported image encodings
 */
export type ImageEncodingType = keyof typeof IMAGE_ENCODING

//--------------------------------------------------------------------------------------------------
/**
 * BrowserType
 * @desc Type representing supported browsers
 */
export enum BrowserType {
    chromium = 'chromium',
    firefox = 'firefox',
}

//--------------------------------------------------------------------------------------------------
/**
 * ChromeBrowserOptions
 * @desc Type representing chrome browser configuration options
 */
export type ChromeBrowserOptions = LaunchOptions & ChromeArgOptions & BrowserOptions
//--------------------------------------------------------------------------------------------------
/**
 * PageOptions
 * @desc Type representing page configuration options
 */
export type PageOptions = {
    /**
     * Page referer.
     */
    readonly referer?: string | undefined
    /**
     * Page loading timeout.
     */
    readonly timeout?: number | undefined
    /**
     * Page loading timeout by event.
     * 'load' | 'domcontentloaded' | 'networkidle'
     */
    readonly waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
}
//--------------------------------------------------------------------------------------------------
/**
 * PlayPageOptions
 * @desc Type representing play page configuration options
 */
export type PlayPageOptions = {
    /**
     * Page referer.
     */
    readonly referer?: string | undefined
    /**
     * Page loading timeout.
     */
    readonly timeout?: number | undefined
    /**
     * Page loading timeout by event.
     * 'load' | 'domcontentloaded' | 'networkidle'
     */
    readonly waitUntil?: 'load' | 'domcontentloaded' | 'networkidle'
}
//--------------------------------------------------------------------------------------------------
/**
 * LocationOptions
 * @desc Type representing location configuration options
 */
export type LocationOptions = {
    /**
     * Generated image name.
     */
    readonly name: string
    /**
     * Generated image path.
     */
    readonly path: string
}
//--------------------------------------------------------------------------------------------------
/**
 * ImageOptions
 * @desc Type representing image configuration options
 */
export type ImageOptions = {
    /**
     * Page width in pixels.
     */
    readonly width: number
    /**
     * Page height in pixels.
     */
    readonly height: number
    /**
     * Device scale factor.
     */
    readonly deviceScaleFactor?: number
}
//--------------------------------------------------------------------------------------------------
/**
 * ImageClipOptions
 * @desc Type representing image clip configuration options
 */
export type ImageClipOptions = {
    /**
     * page clip start X-position in pixels.
     */
    readonly x: number
    /**
     * page clip start Y-position in pixels.
     */
    readonly y: number
    /**
     * page clip width in pixels.
     */
    readonly width: number
    /**
     * page clip height in pixels.
     */
    readonly height: number
}

//--------------------------------------------------------------------------------------------------
/**
 * ScreenshotOptions
 * @desc Type representing screenshot configuration options
 */
export type ScreenshotOptions = {
    /**
     * Image configuration options.
     */
    readonly imageOptions?: Partial<ImageOptions>
    /**
     * Image clip configuration options.
     */
    readonly imageClipOptions?: Partial<ImageClipOptions>
    /**
     * Play browser launch options.
     */
    readonly playLaunchOptions?: Partial<PlayLaunchOptions>
    /**
     * Page configuration options.
     */
    readonly pageOptions?: Partial<PageOptions | PlayPageOptions>
    /**
     * Browser configuration options.
     */
    readonly browserOptions?: Partial<ChromeBrowserOptions>
    /**
     * Image location options.
     */
    readonly locationOptions?: Partial<LocationOptions>
    /**
     * Image resource options.
     */
    readonly resourceOptions?: Partial<ResourceOptions>
}

//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource options
 */
export type ResourceOptions = {
    /**
     * Enable/disable full page view port for screenshot.
     */
    readonly fullPage?: boolean
    /**
     * Screenshot image quality (0-100).
     */
    readonly quality?: number
    /**
     * Omit screenshot background.
     */
    readonly omitBackground?: boolean
    /**
     * Page selector to fetch by
     */
    readonly selector?: string
    /**
     * Image content type.
     */
    readonly type: ImageContentType
    /**
     * Image content transfer encoding.
     */
    readonly encoding: ImageEncodingType
}

//--------------------------------------------------------------------------------------------------
/**
 * RequestOptions
 * @desc Type representing request configuration options
 */
export type RequestOptions = {
    /**
     * Request route options.
     */
    readonly routeOptions: RouteOptions
    /**
     * Request image options.
     */
    readonly imageOptions?: ImageOptions
    /**
     * Request resource options.
     */
    readonly resourceOptions?: ResourceOptions
    /**
     * Request page options.
     */
    readonly pageOptions?: PageOptions
}
//--------------------------------------------------------------------------------------------------
