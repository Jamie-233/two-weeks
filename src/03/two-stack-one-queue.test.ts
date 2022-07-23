import { describe, test, expect } from 'vitest'
import { Queue } from './two-stack-one-queue'

describe('two stack implement one queue', () => {
    test('add and length', () => {
        const q = new Queue()
        expect(q.length).toBe(0)

        q.add(100)
        q.add(200)
        q.add(300)

        expect(q.length).toBe(3)
    })

    test('delete', () => {
        const q = new Queue()
        expect(q.delete()).toBeNull();

        q.add(100);
        q.add(200);
        q.add(300);

        expect(q.delete()).toBe(100)
        expect(q.length).toBe(2)

        expect(q.delete()).toBe(200)
        expect(q.length).toBe(1)
    })
})
