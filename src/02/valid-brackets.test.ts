/**
 * @desc valid brackets
 */

import { test, describe, expect } from 'vitest'
import { validBrackets } from "./valid-brackets";

describe('valid brackets', () => {
    test('normal', () => {
        const str = 'a{b[c(d)e]f}g'
        expect(validBrackets(str)).toBe(true)
    })

    test('not match', () => {
        const str = 'a{b[c([d)e]f}g'
        expect(validBrackets(str)).toBe(false)
    })

    test('out of order', () => {
        const str = 'a{b[c(d}e]f}g'
        expect(validBrackets(str)).toBe(false)
    })

    test('empty string', () => {
        expect(validBrackets('')).toBe(true)
    })
})
