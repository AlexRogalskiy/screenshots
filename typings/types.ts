import { BrowserOptions, ChromeArgOptions, LaunchOptions, PuppeteerLifeCycleEvent } from 'puppeteer'
import { strToEnum } from '../utils/commons'

export interface ImageLocations {
    readonly name: string
    readonly path: string
    readonly extension: string
}

export interface ImageOptions {
    readonly width: number
    readonly height: number
    readonly deviceScaleFactor?: number
}

export declare interface ImageClipOptions {
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
}

export interface PageOptions {
    readonly referer?: string
    readonly timeout?: number
    readonly waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
}

export interface ResourceOptions {
    readonly fullPage?: boolean
    readonly quality?: number
    readonly omitBackground?: boolean
    readonly type?: ImageContentType
    readonly encoding?: ImageEncodingType
    readonly path?: string
}

export interface ConfigOptions {
    readonly locationOptions: ImageLocations
    readonly imageOptions: ImageOptions
    readonly resourceOptions?: ResourceOptions
    readonly pageOptions?: PageOptions
    readonly imageClipOptions?: ImageClipOptions
    readonly browserOptions?: LaunchOptions & ChromeArgOptions & BrowserOptions
}

export interface ParsedImageOptions {
    width?: number
    height?: number
}

export interface ParsedResourceOptions {
    fullPage?: boolean
    type?: ImageContentType | undefined
    encoding?: ImageEncodingType | undefined
}

export interface ParsedRequest {
    url: string
    imageOptions?: ParsedImageOptions
    resourceOptions?: ParsedResourceOptions
}

export const ImageContent = strToEnum(['jpeg', 'png'])
export type ImageContentType = keyof typeof ImageContent

export const ImageEncoding = strToEnum(['base64', 'binary'])
export type ImageEncodingType = keyof typeof ImageEncoding
