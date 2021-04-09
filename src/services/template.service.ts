import {
    GeneralPageOptions,
    ImageOptions,
    RequestOptions,
    ResourceOptions,
} from '../../typings/browser-types'

import * as screenshotClient from '../clients/screenshot.client'

import { serialize } from '../utils/serializers'
import { mergeProps } from '../utils/commons'
import { boxenLogs } from '../utils/loggers'
import { profile } from '../utils/profiles'

export async function templateRenderer(request: RequestOptions): Promise<Buffer | string | void> {
    boxenLogs(`>>> Generating screenshot with request parameters: ${serialize(request)}`)

    const { imageOptions, resourceOptions, pageOptions } = profile.screenshotOptions

    const requestData: Required<RequestOptions> = {
        routeOptions: request.routeOptions,
        imageOptions: mergeProps<ImageOptions>(imageOptions, request.imageOptions),
        resourceOptions: mergeProps<ResourceOptions>(resourceOptions, request.resourceOptions),
        pageOptions: mergeProps<GeneralPageOptions>(pageOptions, request.pageOptions),
    }

    return await screenshotClient.screenshotRenderer(requestData)
}
