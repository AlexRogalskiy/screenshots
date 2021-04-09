import { ProfilePattern } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { OUTPUT_OPTIONS, ROUTE_OPTIONS, SCREENSHOTS_OPTIONS } from '../constants/constants'

/**
 * ProfilePatternOptions
 * @desc Type representing profile configuration options
 */
export type ProfilePatternOptions = Record<ProfilePattern, ProfileOptions>

/**
 * Profile configuration options
 */
export const CONFIG: Readonly<ProfilePatternOptions> = {
    dev: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: SCREENSHOTS_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: SCREENSHOTS_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: SCREENSHOTS_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
