import { ConfigOptions } from '../typings/types'

export const CONFIG: ConfigOptions = {
    locationOptions: {
        name: 'screenshot',
        path: 'images',
        extension: 'png',
    },
    imageOptions: {
        screenSize: {
            width: 800,
            height: 800,
        },
        shotSize: {
            width: 800,
            height: 800,
        },
        timeout: 5000,
        defaultWhiteBackground: true,
        userAgent:
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g',
    },
}
