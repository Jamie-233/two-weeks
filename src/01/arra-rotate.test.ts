/**
 * @description Array rotate test
 */

import { test, describe, expect } from 'vitest'
import { rotate1, rotate2 } from "./array-rotate";

describe('array rotate', () => {
    test('normal', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const res = rotate2(arr, k);
        expect(res).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
    })

    test('array is empty', () => {
        const res = rotate2([], 3);
        expect(res).toStrictEqual([]);
    })

    test('k is negative number', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = -3;
        const res = rotate2(arr, k);
        expect(res).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
    })

    test('k not a number', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 'xxx';

        // @ts-ignore
        const res = rotate2(arr, k);
        expect(res).toStrictEqual(arr)
    })

    test('k is zero', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 0;
        const res = rotate2(arr, k);
        expect(res).toStrictEqual(arr)
    })
})