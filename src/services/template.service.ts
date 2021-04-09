import { RequestOptions } from '../../typings/browser-types'

import * as screenshotClient from '../clients/screenshot.client'

import { boxenLogs } from '../utils/loggers'
import { serialize } from '../utils/serializers'

export async function templateRenderer(request: RequestOptions): Promise<Buffer | string | void> {
    boxenLogs(`>>> Generating screenshot with request parameters: ${serialize(request)}`)

    return await screenshotClient.screenshotRenderer(request)
}
