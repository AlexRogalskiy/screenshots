import fetch from 'isomorphic-unfetch'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import _ from 'lodash'
import { ImageLocations } from '../typings/types'

export const toBase64ImageUrl = async (imgUrl): Promise<string> => {
    const fetchImageUrl = await fetch(imgUrl)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const isValidUrl = (str: string): boolean => {
    try {
        new URL(str)
        return true
    } catch (e) {
        return false
    }
}

export const isNonEmptyString = (str: string): boolean => {
    return str && str.length > 0
}

export const isBlankString = (str: string): boolean => {
    return !str || /^\s*$/.test(str)
}

export const notBlankOrElse = (str: string, defaultValue: string): string => {
    return isBlankString(str) ? defaultValue : str
}

export const toBoolean = (value): boolean => {
    return (
        value === true ||
        value === 'true' ||
        value === 1 ||
        value === '1' ||
        value === 'on' ||
        value === 'yes'
    )
}

export const omitNull = <T>(obj: T): T => {
    // eslint-disable-next-line github/array-foreach
    Object.keys(obj)
        .filter(k => obj[k] === null || obj[k] === undefined)
        .forEach(k => delete obj[k])
    return obj
}

export const mergeProps = <T>(...obj: unknown[]): T => {
    return _.mergeWith({}, ...obj, (o, s) => (_.value === null ? o : s))
}

export const toString = (str: string | string[]): string => {
    return Array.isArray(str) ? str[0] : str
}

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj): string => {
    let str = ''
    for (const p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += `${p} => ${typeof obj[p] === 'object' ? `[${objToString(obj[p])}]` : `${obj[p]},`}`
        }
    }
    return str
}

export const toInt = (str: string, defaultValue?: number): number => {
    try {
        return parseInt(str) || defaultValue
    } catch (e) {
        return defaultValue
    }
}

export const createFilePath = (locations: ImageLocations): string => {
    const date = new Date()
    const timestamp = `${date.getFullYear()}_${
        date.getMonth() + 1
    }_${date.getDate()}_${date.getHours()}_${date.getMinutes()}`

    const { path, name, extension } = locations
    const fileName = `${name}-${timestamp}.${extension}`

    if (!existsSync(path)) {
        mkdirSync(path)
    }

    return join(path, fileName)
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

export const pluck = <T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] => {
    return propertyNames.map(n => o[n])
}
