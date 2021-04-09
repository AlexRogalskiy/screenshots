import { NowRequest, NowResponse } from '@vercel/node'

import { ResourceOptions } from '../../typings/browser-types'

import * as templateService from '../services/template.service'

import { single, toBoolean, toInt } from '../utils/commons'
import { requireValidUrl } from '../utils/validators'
import { setHeaders } from '../utils/requests'
import { profile } from '../utils/profiles'

import { IMAGE_ENCODING, IMAGE_TYPE, RESOURCE_OPTIONS, RESPONSE_HEADERS } from '../constants/constants'

const prepareResponseHeaders = (res: NowResponse, resourceOptions: ResourceOptions): void => {
    const resources = profile.screenshotOptions.resourceOptions
    const name = profile.screenshotOptions.locationOptions?.name

    const contentType = resourceOptions.type || resources?.type || RESOURCE_OPTIONS.type
    const contentEncoding = resourceOptions.encoding || resources?.encoding || RESOURCE_OPTIONS.encoding

    setHeaders(res, {
        ...RESPONSE_HEADERS,
        ...{
            'Content-Type': `image/${contentType}, name="${name}.${contentType}"`,
            'Content-Transfer-Encoding': `${contentEncoding}`,
            'Content-Disposition': `attachment; filename="${name}.${contentType}"`,
        },
    })
}

export async function defaultController(req: NowRequest, res: NowResponse): Promise<NowResponse> {
    const url = requireValidUrl(single(req.query.url))

    const width = toInt(single(req.query.width))
    const height = toInt(single(req.query.height))

    const selector = single(req.query.selector)
    const fullPage = toBoolean(single(req.query.fullPage))
    const type = IMAGE_TYPE[single(req.query.type)]
    const encoding = IMAGE_ENCODING[single(req.query.encoding)]

    const routeOptions = { url }
    const imageOptions = { width, height }
    const resourceOptions = { selector, fullPage, type, encoding }

    const screenshot = await templateService.templateRenderer({
        routeOptions,
        imageOptions,
        resourceOptions,
    })

    prepareResponseHeaders(res, resourceOptions)

    return res.send(screenshot)
}
