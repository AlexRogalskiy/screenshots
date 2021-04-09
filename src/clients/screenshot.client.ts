import {
    GeneralPageOptions,
    ImageOptions,
    PuppeteerPageOptions,
    RequestOptions,
    ResourceOptions,
} from '../../typings/browser-types'

import { profile } from '../utils/profiles'
import { mergeProps } from '../utils/commons'
import { boxenLogs } from '../utils/loggers'
import { serialize } from '../utils/serializers'
import { createBrowserSession } from '../utils/sessions'

const getSessionScreenshot = async (request: Required<RequestOptions>): Promise<Buffer | string | void> => {
    boxenLogs(`>>> Generating screenshot with parameters: ${serialize(request)}`)

    const { routeOptions, imageOptions, resourceOptions, pageOptions } = request

    const session = await createBrowserSession()

    try {
        await session.setup()

        return await session.createScreenshot(
            routeOptions.url,
            imageOptions,
            resourceOptions,
            pageOptions as PuppeteerPageOptions
        )
    } finally {
        await session.teardown()
    }
}

export async function screenshotRenderer(request: RequestOptions): Promise<Buffer | string | void> {
    const { imageOptions, resourceOptions, pageOptions } = profile.screenshotOptions

    const requestData: Required<RequestOptions> = {
        routeOptions: request.routeOptions,
        imageOptions: mergeProps<ImageOptions>(imageOptions, request.imageOptions),
        resourceOptions: mergeProps<ResourceOptions>(resourceOptions, request.resourceOptions),
        pageOptions: mergeProps<GeneralPageOptions>(pageOptions, request.pageOptions),
    }

    return await getSessionScreenshot(requestData)
}
