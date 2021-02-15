import { ImageOptions, ParsedRequest, PlayPageOptions, ResourceOptions } from '../typings/types'
import PlaywrightSession from './playwright'
import { mergeProps, toFormatString } from './commons'
import { CONFIG } from './config'

export async function screenshotRenderer(parsedRequest: ParsedRequest): Promise<Buffer | string | void> {
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, parsedRequest.imageOptions)
    const resourceOptions: ResourceOptions = mergeProps(CONFIG.resourceOptions, parsedRequest.resourceOptions)
    const pageOptions: PlayPageOptions = mergeProps(CONFIG.playPageOptions, parsedRequest.pageOptions)

    return await createScreenshot(parsedRequest.url, imageOptions, resourceOptions, pageOptions)
}

const createScreenshot = async (
    url: string,
    imageOptions: ImageOptions,
    resourceOptions: ResourceOptions,
    pageOptions: PlayPageOptions,
    file?: string
): Promise<Buffer | string | void> => {
    console.log(
        `\n>>> Generating screenshot with parameters:
        url=${url},
        name=${file},
        imageOptions=${toFormatString(imageOptions)},
        resourceOptions=${toFormatString(resourceOptions)}
        `
    )

    const browserSession = new PlaywrightSession()
    try {
        await browserSession.setup()

        return await browserSession.createScreenshot(url, imageOptions, resourceOptions, pageOptions)
    } finally {
        console.log('Closing the browser session...')
        await browserSession.teardown()
    }
}
