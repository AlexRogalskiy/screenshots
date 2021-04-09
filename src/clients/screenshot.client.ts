import { PuppeteerPageOptions, RequestOptions } from '../../typings/browser-types'

import { boxenLogs } from '../utils/loggers'
import { serialize } from '../utils/serializers'
import { createBrowserSession } from '../utils/sessions'

export async function screenshotRenderer(request: Required<RequestOptions>): Promise<Buffer | string | void> {
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
