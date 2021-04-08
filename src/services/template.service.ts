import { ParsedRequest } from '../../typings/browser-types'

import * as screenshotClient from '../clients/screenshot.client'

export async function templateRenderer(requestData: ParsedRequest): Promise<Buffer | string | void> {
    return await screenshotClient.screenshotRenderer(requestData)
}
