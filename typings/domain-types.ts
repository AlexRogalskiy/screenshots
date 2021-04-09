import boxen from 'boxen'

import { ScreenshotOptions } from './browser-types'

/**
 * Headers
 * @desc Type representing headers
 */
export type Headers = Record<string, number | string | string[]>

//--------------------------------------------------------------------------------------------------
/**
 * RouteOptions
 * @desc Type representing route configuration options
 */
export type RouteOptions = {
    /**
     * Route base url.
     */
    readonly url: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile configuration options
 */
export type ProfileOptions = {
    /**
     * Route options.
     */
    readonly routeOptions: Partial<RouteOptions>
    /**
     * Screenshot options.
     */
    readonly screenshotOptions: Partial<ScreenshotOptions>
    /**
     * Logging options
     */
    readonly outputOptions?: Partial<boxen.Options>
}
//--------------------------------------------------------------------------------------------------
