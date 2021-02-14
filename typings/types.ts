export interface ImageDimensions {
    width: number
    height: number
}

export interface ImageLocations {
    readonly name: string
    readonly path: string
    readonly extension: string
}

export interface ImageOptions {
    readonly screenSize: ImageDimensions
    readonly shotSize: ImageDimensions
    readonly timeout: number
    readonly defaultWhiteBackground: boolean
    readonly userAgent: string
}

export interface ConfigOptions {
    readonly locationOptions: ImageLocations
    readonly imageOptions: ImageOptions
}

export interface ParsedImageOptions {
    screenSize?: ImageDimensions
    shotSize?: ImageDimensions
}

export interface ParsedRequest {
    url: string
    options?: ParsedImageOptions
}
