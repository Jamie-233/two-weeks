/**
 * @desc array rotate k step usage pop and unshift
 * @param arr 
 * @param k 
 * @returns arr
 */
export function rotate1(arr: number[] = [], k: number): number[] {
    const length = arr.length;

    if (!k || length === 0) return arr;

    const step = Math.abs(k % length)

    // O(n^2)
    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        
        // 0 or '' is true
        if (n != null) {
            // array is ordered structure unshift is very slow
            arr.unshift(n); // O(n)
        }
    }

    return arr;
}

export function rotate2(arr: number[] = [], k: number): number[] {
    const length = arr.length;

    if (!k || length === 0) return arr;

    const step = Math.abs(k % length);

    const part1 = arr.slice(-step);
    const part2 = arr.slice(0, length - step);

    return [...part1, ...part2]
}

// function test
// console.log(rotate1([1, 2, 3, 4, 5], 3));
// console.log(rotate2([1, 2, 3, 4, 5], 3));

// performance test
// const arr1 = new Array(100000).fill(1);
// const arr2 = new Array(100000).fill(1);

// console.time('rotate1')
// rotate1(arr1, 90000) // O(n^2) 900ms
// console.timeEnd('rotate1')

// console.time('rotate2')
// rotate2(arr2, 90000) // O(1) 1ms
// console.timeEnd('rotate2')