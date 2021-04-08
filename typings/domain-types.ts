import boxen from 'boxen'

import { ScreenshotOptions } from './browser-types'
//--------------------------------------------------------------------------------------------------
/**
 * Headers
 * @desc Type representing headers
 */
export type Headers = Record<string, number | string | string[]>

//--------------------------------------------------------------------------------------------------
/**
 * RouteOptions
 * @desc Type representing route options
 */
export interface RouteOptions {
    /**
     * Route base url.
     */
    readonly url: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Route configuration options.
     */
    readonly routeOptions: Partial<RouteOptions>
    /**
     * Screenshot configuration options.
     */
    readonly screenshotOptions: Partial<ScreenshotOptions>
    /**
     * Logging options
     */
    readonly outputOptions?: Partial<boxen.Options>
}
//--------------------------------------------------------------------------------------------------
