import { NowRequest, NowResponse, VercelResponse } from '@vercel/node/dist'
import { toInt, toString, toBoolean } from '../utils/commons'
import { screenshotRenderer } from '../utils/screenshot'
import { CONFIG } from '../utils/config'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const url = toString(req.query.url)
        const fullPage = toBoolean(toString(req.query.fullPage))
        const width = toInt(toString(req.query.width), CONFIG.imageOptions.width)
        const height = toInt(toString(req.query.height), CONFIG.imageOptions.height)
        const imageOptions = { width, height }
        const resourceOptions = { fullPage }

        const screenshot = await screenshotRenderer({
            url,
            imageOptions,
            resourceOptions
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
            message: error.message
        })
    }
}
