/**
 * @desc queue with linked list test
 */

import { describe, test, expect } from 'vitest';
import { MyQueue } from './queue-with-linked-list';

describe('queue with linked list', () => {
    test('add and length', () => {
        const q = new MyQueue();
        q.add(100);
        q.add(200);
        q.add(300);

        const length = q.length;
        expect(length).toBe(3);
    });

    test('delete', () => {
        const q = new MyQueue();
        expect(q.delete()).toBeNull();

        q.add(100);
        q.add(200);
        q.add(300);

        expect(q.delete()).toBe(100);
        expect(q.delete()).toBe(200);
        expect(q.delete()).toBe(300);
        expect(q.delete()).toBeNull();
    });
});
