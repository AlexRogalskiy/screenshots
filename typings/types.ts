export interface ImageLocations {
    readonly name: string
    readonly path: string
    readonly extension: string
}

export interface ImageOptions {
    readonly width: number
    readonly height: number
    readonly deviceScaleFactor?: number
}

export interface ResourceOptions {
    readonly fullPage: boolean
}

export interface ConfigOptions {
    readonly locationOptions: ImageLocations
    readonly imageOptions: ImageOptions
    readonly resourceOptions: ResourceOptions
}

export interface ParsedImageOptions {
    width?: number
    height?: number
}

export interface ParsedResourceOptions {
    fullPage?: boolean
}

export interface ParsedRequest {
    url: string
    imageOptions?: ParsedImageOptions
    resourceOptions?: ParsedResourceOptions
}
