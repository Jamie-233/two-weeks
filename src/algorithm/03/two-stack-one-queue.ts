/**
 * @desc two array implement one queue
 */

export class Queue {
    private stack1: number[] = []
    private stack2: number[] = []

    // O(1)
    add(n: number) {
        this.stack1.push(n)
    }

    // O(n)
    delete(): number | null {
        let res;
        const stack1 = this.stack1;
        const stack2 = this.stack2;
        
        while(stack1.length) {
            const n = stack1.pop()
            if(n != null) {
                stack2.push(n)
            }
        }

        // pop stack top
        res = stack2.pop()

        while(stack2.length) {
            const n = stack2.pop()
            if(n != null) {
                stack1.push(n)
            }
        }

        return res || null;
    }

    get length(): number {
        return this.stack1.length;
    }
}

// const q = new Queue()
// q.add(100)
// q.add(200)
// q.add(300)

// console.log(q.length);
// console.log(q.delete());
// console.log(q.delete());
// console.log(q.length);
