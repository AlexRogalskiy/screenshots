import { webshot } from 'webshot'
import { path } from 'path'
import { ImageOptions, ParsedRequest } from '../typings/types'
import { toBase64ImageUrl, toFormatString } from './commons'
import { CONFIG } from './config'

export async function screenshotRenderer(parsedRequest: ParsedRequest): Promise<string | void> {
    const file = getFilePath()
    const options = { ...CONFIG.imageOptions, ...parsedRequest.options }
    await createScreenshot(parsedRequest.url, file, options)

    // eslint-disable-next-line github/no-then
    return await toBase64ImageUrl(file).catch(console.error)
}

const createScreenshot = async (url: string, file: string, options: ImageOptions): Promise<void> => {
    console.log(
        `
        Generating screenshot with parameters:
        url=${url},
        name=${file},
        options=${toFormatString(options)}
        `
    )

    await webshot(url, file, options, async err => {
        if (err) throw err
        console.log('screenshot captured')
    })
}

const getFilePath = (): string => {
    return path.join(
        CONFIG.locationOptions.path,
        `${CONFIG.locationOptions.name}.${CONFIG.locationOptions.extension}`
    )
}
