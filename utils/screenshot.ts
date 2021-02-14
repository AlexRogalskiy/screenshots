import { ImageOptions, ParsedRequest, ResourceOptions } from '../typings/types'
import BrowserSession from './browser'
import { toFormatString } from './commons'
import { CONFIG } from './config'

export async function screenshotRenderer(parsedRequest: ParsedRequest): Promise<Buffer | string | void> {
    const imageOptions = { ...CONFIG.imageOptions, ...parsedRequest.imageOptions }
    const resourceOptions = { ...CONFIG.resourceOptions, ...parsedRequest.resourceOptions }

    return await createScreenshot(parsedRequest.url, imageOptions, resourceOptions)
}

const createScreenshot = async (
    url: string,
    imageOptions: ImageOptions,
    resourceOptions: ResourceOptions,
    file?: string
): Promise<Buffer | string | void> => {
    console.log(
        `
        Generating screenshot with parameters:
        url=${url},
        name=${file}
        imageOptions=${toFormatString(imageOptions)}
        resourceOptions=${toFormatString(resourceOptions)}
        `
    )

    const browserSession = new BrowserSession()
    await browserSession.setup()
    const imageBuffer = await browserSession.createScreenshot(url, imageOptions, resourceOptions)
    await browserSession.teardown()

    return imageBuffer
}
