import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

export const toBase64ImageUrl = async (imgUrl: string): Promise<string> => {
    const fetchImageUrl = await fetch(imgUrl)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const separator = (num: number, delim = '='): string => {
    return Array(num).join(delim)
}

export const isValidUrl = (str: string): boolean => {
    try {
        new URL(str)
        return true
    } catch (e) {
        return false
    }
}

export const requireValidUrl = (str: string): string => {
    if (isValidUrl(str)) {
        return str
    }
    throw new Error(`Invalid URL: ${str}`)
}

export const isNonEmptyString = (str: string): boolean => {
    return str !== undefined && str !== null && str.length > 0
}

export const isBlankString = (str: string): boolean => {
    return !str || /^\s*$/.test(str)
}

export const notBlankOrElse = (str: string, defaultValue: string): string => {
    return isBlankString(str) ? defaultValue : str
}

export const toBoolean = (value: any): boolean => {
    return (
        (typeof value === 'string' && /true/i.test(value)) ||
        value === true ||
        value === 'true' ||
        value === 1 ||
        value === '1' ||
        value === 'on' ||
        value === 'yes'
    )
}

export const mergeProps = <T>(...obj: unknown[]): T => {
    return _.mergeWith({}, ...obj, (o, s) => (_.isNull(s) ? o : s))
}

export const toString = (str: string | string[]): string => {
    return Array.isArray(str) ? str[0] : str
}

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj): string => {
    let str = ''
    let i = 0

    const entries = Object.entries(obj)
    for (const [key, value] of entries) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str += `${key} => ${typeof value === 'object' ? `[${objToString(value)}]` : `${value}, `}`
        }
        if (++i === entries.length) {
            str = str.substring(0, str.length - 2)
        }
    }
    return str
}

export const toInt = (str: string, defaultValue?: number): number | undefined => {
    try {
        return parseInt(str) || defaultValue
    } catch (e) {
        return defaultValue
    }
}

/**
 * Utility function to create a K:V from a list of strings
 * @param o initial input array to operate by
 */
export const strToEnum = <T extends string>(o: T[]): { [K in T]: K } => {
    return o.reduce((res, key) => {
        res[key] = key
        return res
    }, Object.create(null))
}
