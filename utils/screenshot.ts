import { ImageOptions, PageOptions, ParsedRequest, ResourceOptions } from '../typings/types'
import RemoteBrowserSession from './remoteBrowserSession'
import LocalBrowserSession from './localBrowserSession'
import BaseBrowserSession from './baseBrowserSession'
import { mergeProps, toFormatString } from './commons'
import { CONFIG } from './config'

export async function screenshotRenderer(parsedRequest: ParsedRequest): Promise<Buffer | string | void> {
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, parsedRequest.imageOptions)
    const resourceOptions: ResourceOptions = mergeProps(CONFIG.resourceOptions, parsedRequest.resourceOptions)
    const pageOptions: PageOptions = mergeProps(CONFIG.playPageOptions, parsedRequest.pageOptions)

    return await createScreenshot(parsedRequest.url, imageOptions, resourceOptions, pageOptions)
}

const createScreenshot = async (
    url: string,
    imageOptions: ImageOptions,
    resourceOptions: ResourceOptions,
    pageOptions: PageOptions,
    file?: string
): Promise<Buffer | string | void> => {
    console.log(
        `
        >>> Generating screenshot with parameters:
        url=${url},
        name=${file},
        imageOptions=${toFormatString(imageOptions)},
        resourceOptions=${toFormatString(resourceOptions)}
        `
    )

    return await getSessionScreenshot(url, imageOptions, resourceOptions, pageOptions)
}

const getSessionScreenshot = async (
    url: string,
    imageOptions: ImageOptions,
    resourceOptions: ResourceOptions,
    pageOptions: PageOptions
): Promise<Buffer | string | void> => {
    const browserSession = await getSession()
    try {
        await browserSession.setup()
        return await browserSession.createScreenshot(url, imageOptions, resourceOptions, pageOptions)
    } finally {
        await browserSession.teardown()
    }
}

const getSession = async (): Promise<BaseBrowserSession> => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION
        ? RemoteBrowserSession.createSession()
        : LocalBrowserSession.createSession()
}
