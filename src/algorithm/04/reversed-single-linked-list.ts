/**
 * @description reversed single linked list
 * linked list features: find slow O(n) add and delete fast O(1)
 * array features: find fast O(1) add and delete slow(array middle operation) O(n)
 */

export interface ILinkedListNode {
    value: number,
    next?: ILinkedListNode
}

export function reverseLinkedList(listNode: ILinkedListNode): ILinkedListNode {
    // statement three point
    let prevNode: ILinkedListNode | undefined = undefined
    let curNode: ILinkedListNode | undefined = undefined
    let nextNode:ILinkedListNode | undefined = listNode

    while(nextNode) {
        if(curNode && !prevNode) {
            delete curNode.next
        }

        // middle
        if(curNode && prevNode) {
            curNode.next = prevNode
        }

        // move backward
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }

    // handle single linked list
    if(prevNode)  {
        // nextNode is null
        curNode!.next = prevNode
    }

    return curNode!
}

/**
 * @desc according to array create linked list
 * @param arr 
 */
 export function createLinkedList(arr: number[]): ILinkedListNode {
    const length = arr.length;

    if (length === 0) throw new Error('arr is empty');

    // linked list read from the beginning
    // linked list create need get array last element
    // array back to front splicing

    // arr = [100, 200, 300]
    // { value: 300 }
    // { value: 200, next: { value: 300 } }
    // { value: 100, next: { value: 200, next: { value: 300 } } }

    let currentNode: ILinkedListNode = {
        value: arr[arr.length - 1],
    };

    if (length === 1) return currentNode;

    for (let i = length - 2; i >= 0; i--) {
        currentNode = {
            value: arr[i],
            next: currentNode
        }
    }

    return currentNode;
}

const arr = [100, 200, 300]
const ls = createLinkedList(arr)

console.log(reverseLinkedList(ls))