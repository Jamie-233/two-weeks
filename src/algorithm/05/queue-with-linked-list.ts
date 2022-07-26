interface IListNode {
    value: number;
    next: IListNode | null;
}

export class MyQueue {
    private len: number = 0;
    private head: IListNode | null = null;
    private tail: IListNode | null = null;

    // queue in the tail position
    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null,
        };

        if (this.head == null) {
            this.head = newNode;
        }

        // handle tail
        const tailNode = this.tail;
        if (tailNode) {
            tailNode.next = newNode;
        }

        this.tail = newNode;

        this.len++;
    }

    // out queue in the head position
    delete(): number | null {
        const headNode = this.head;

        if (headNode == null) return null;
        if (this.len === 0) return null;

        const value = headNode.value;

        this.head = headNode.next;

        this.len--;

        return value;
    }

    get length(): number {
        return this.len;
    }
}

// const q = new MyQueue();

// q.add(100)
// q.add(200)
// q.add(300)
// console.log(q.length);

// console.log(q.delete());
// console.log(q.length);

// console.log(q.delete());
// console.log(q.length);

// console.log(q.delete());
// console.log(q.length);

// console.log(q.delete());
// console.log(q.length);

// performance test

const q1 =  new MyQueue()

console.time('queue with linked list')

for(let i =  0; i < 10* 10000; i++) {
    q1.add(i);
}
for(let i =  0; i < 10* 10000; i++) {
    q1.delete();
}

console.timeEnd('queue with linked list') // 3 ms

const q2 = []

console.time('queue with array')

for(let i =  0; i < 10* 10000; i++) {
    q2.push(i);
}
for(let i =  0; i < 10* 10000; i++) {
    q2.shift();
}

console.timeEnd('queue with array') // 390 ms