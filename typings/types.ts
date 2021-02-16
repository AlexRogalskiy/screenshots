import { BrowserOptions, ChromeArgOptions, LaunchOptions, PuppeteerLifeCycleEvent } from 'puppeteer-core'
import { LaunchOptions as PlayLaunchOptions } from 'playwright-chromium'

import { strToEnum } from '../utils/commons'

// eslint-disable-next-line no-shadow
export enum BrowserProfile {
    dev = 'dev',
    prod = 'prod',
}

// eslint-disable-next-line no-shadow
export enum BrowserType {
    chromium = 'chromium',
    firefox = 'firefox',
}

export type BrowserProfileOptions = {
    [K in BrowserProfile]: LaunchOptions & ChromeArgOptions & BrowserOptions
}

export interface ImageLocations {
    /**
     * Generated image name.
     */
    readonly name: string
    /**
     * Generated image path.
     */
    readonly path: string
    /**
     * Generated image extension.
     */
    readonly extension: string
}

export interface ImageOptions {
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

export declare interface ImageClipOptions {
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

export interface PageOptions {
    /**
     * Page referer.
     */
    readonly referer?: string
    /**
     * Page loading timeout.
     */
    readonly timeout?: number
    /**
     * Page loading timeout by event.
     */
    readonly waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
}

export interface PlayPageOptions {
    /**
     * Referer header value.
     */
    referer?: string
    /**
     * Maximum operation time in milliseconds.
     */
    timeout?: number
    /**
     * Waits until specific operation succeeded:
     * - `'domcontentloaded'`
     * - `'load'`
     * - `'networkidle'`.
     */
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle'
}

export interface ResourceOptions {
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
     * Image content type.
     */
    readonly type: ImageContentType
    /**
     * Image content transfer encoding.
     */
    readonly encoding: ImageEncodingType
}

export interface ConfigOptions {
    /**
     * Location configuration options.
     */
    readonly locationOptions: ImageLocations
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Resource configuration options.
     */
    readonly resourceOptions: ResourceOptions
    /**
     * Page configuration options.
     */
    readonly pageOptions?: PageOptions
    /**
     * Play page configuration options.
     */
    readonly playPageOptions?: PlayPageOptions
    /**
     * Image clip configuration options.
     */
    readonly imageClipOptions?: ImageClipOptions
    /**
     * Browser configuration options.
     */
    readonly browserOptions: BrowserProfileOptions
    /**
     * Play browser launch options.
     */
    readonly launchOptions: PlayLaunchOptions
}

export interface ParsedImageOptions {
    /**
     * Parsed image width in pixels.
     */
    width?: number
    /**
     * Parsed image height in pixels.
     */
    height?: number
}

export interface ParsedResourceOptions {
    /**
     * Parsed image full-page viewport support.
     */
    fullPage?: boolean
    /**
     * Parser image content type.
     */
    type?: ImageContentType | undefined
    /**
     * Parsed image encoding type.
     */
    encoding?: ImageEncodingType | undefined
}

export interface ParsedPlayPageOptions {
    /**
     * Parsed referer header value.
     */
    referer?: string
    /**
     * Parsed maximum operation time in milliseconds.
     */
    timeout?: number
    /**
     * Parsed waits until specific operation succeeded:
     * - `'domcontentloaded'`
     * - `'load'`
     * - `'networkidle'`.
     */
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle'
}

export interface ParsedRequest {
    /**
     * Parsed image url.
     */
    url: string
    /**
     * Parsed image options.
     */
    imageOptions?: ParsedImageOptions
    /**
     * Parsed resource options.
     */
    resourceOptions?: ParsedResourceOptions
    /**
     * Parsed page options.
     */
    pageOptions?: ParsedPlayPageOptions
}

export const ImageContent = strToEnum(['jpeg', 'png'])
export type ImageContentType = keyof typeof ImageContent

export const ImageEncoding = strToEnum(['base64', 'binary'])
export type ImageEncodingType = keyof typeof ImageEncoding
