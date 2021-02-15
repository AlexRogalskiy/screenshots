import { ImageOptions, ParsedRequest, ResourceOptions } from '../typings/types'
import BrowserSession from './browser'
import { mergeProps, toFormatString } from './commons'
import { CONFIG } from './config'

export async function screenshotRenderer(parsedRequest: ParsedRequest): Promise<Buffer | string | void> {
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, parsedRequest.imageOptions)
    const resourceOptions: ResourceOptions = mergeProps(CONFIG.resourceOptions, parsedRequest.resourceOptions)

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
    await browserSession.setup(process.env.DEBUG ? CONFIG.browserOptions : {})
    const imageBuffer = await browserSession.createScreenshot(
        url,
        imageOptions,
        resourceOptions,
        CONFIG.pageOptions
    )
    await browserSession.teardown()

    return imageBuffer
}
