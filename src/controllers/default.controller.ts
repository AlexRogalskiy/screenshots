import { NowRequest, NowResponse } from '@vercel/node'

import * as templateService from '../services/template.service'

import { setHeaders } from '../utils/requests'
import { single, toBoolean, toInt } from '../utils/commons'
import { profile } from '../utils/profiles'
import { requireValidUrl } from '../utils/validators'

import { ImageContent, ImageEncoding, RESOURCE_OPTIONS } from '../constants/constants'

export async function defaultController(req: NowRequest, res: NowResponse): Promise<NowResponse> {
    const url = requireValidUrl(single(req.query.url))

    const width = toInt(single(req.query.width))
    const height = toInt(single(req.query.height))

    const selector = single(req.query.selector)
    const fullPage = toBoolean(single(req.query.fullPage))
    const type = ImageContent[single(req.query.type)]
    const encoding = ImageEncoding[single(req.query.encoding)]

    const routeOptions = { url }
    const imageOptions = { width, height }
    const resourceOptions = { selector, fullPage, type, encoding }

    const resources = profile.screenshotOptions.resourceOptions
    const contentType = type || resources?.type || RESOURCE_OPTIONS.type
    const contentEncoding = encoding || resources?.encoding || RESOURCE_OPTIONS.encoding

    setHeaders(res)
    res.setHeader('Content-type', `image/${contentType}`)
    res.setHeader('Content-transfer-encoding', `${contentEncoding}`)

    const screenshot = await templateService.templateRenderer({
        routeOptions,
        imageOptions,
        resourceOptions,
    })

    return res.send(screenshot)
}
