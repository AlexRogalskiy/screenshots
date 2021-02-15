import { NowRequest, NowResponse, VercelResponse } from '@vercel/node/dist'
import { toBoolean, toInt, toString } from '../utils/commons'
import { screenshotRenderer } from '../utils/screenshot'
import { ImageContent, ImageContentType, ImageEncoding, ImageEncodingType } from '../typings/types'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const url = toString(req.query.url)
        const width = toInt(toString(req.query.width))
        const height = toInt(toString(req.query.height))

        const fullPage = toBoolean(toString(req.query.fullPage))
        const type: ImageContentType = ImageContent[toString(req.query.type)]
        const encoding: ImageEncodingType = ImageEncoding[toString(req.query.encoding)]

        const imageOptions = { width, height }
        const resourceOptions = { fullPage, type, encoding }

        const screenshot = await screenshotRenderer({
            url,
            imageOptions,
            resourceOptions,
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/png')

        return res.send(screenshot)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
