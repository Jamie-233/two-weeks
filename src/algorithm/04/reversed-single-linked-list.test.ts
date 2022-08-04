/**
 * @desc reverse single linked list
 */

import { describe, expect, test } from "vitest";
import {
    ILinkedListNode,
    createLinkedList,
    reverseLinkedList
} from './reversed-single-linked-list'

describe('reverse linked list', () => {
    test('single', () => {
        const node: ILinkedListNode = { value: 100 }
        const node1 = reverseLinkedList(node);
        expect(node1).toStrictEqual({ value: 100 })
    })

    test('multiple', () => {
        const node = createLinkedList([100, 200, 300])
        const node1 = reverseLinkedList(node);
        expect(node1).toStrictEqual({
            value: 300,
            next: {
                value: 200,
                next: { value: 100 }
            }
        })
    })
})

