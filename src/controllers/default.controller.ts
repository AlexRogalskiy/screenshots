import { NowRequest, NowResponse } from '@vercel/node'

import { ResourceOptions } from '../../typings/browser-types'

import * as templateService from '../services/template.service'

import { single, toBoolean, toInt } from '../utils/commons'
import { requireValidUrl } from '../utils/validators'
import { setHeaders } from '../utils/requests'
import { profile } from '../utils/profiles'

import {
    IMAGE_CONTENT,
    IMAGE_ENCODING,
    LOCATION_OPTIONS,
    RESOURCE_OPTIONS,
    RESPONSE_HEADERS,
} from '../constants/constants'

const prepareResponseHeaders = (res: NowResponse, resources: ResourceOptions): void => {
    const { locationOptions, resourceOptions } = profile.screenshotOptions

    const name = locationOptions?.name || LOCATION_OPTIONS.name
    const contentType = resources.type || resourceOptions?.type || RESOURCE_OPTIONS.type
    const contentEncoding = resources.encoding || resourceOptions?.encoding || RESOURCE_OPTIONS.encoding

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
    const type = IMAGE_CONTENT[single(req.query.type)]
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
