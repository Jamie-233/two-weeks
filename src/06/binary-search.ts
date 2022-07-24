/**
 * @desc binary search
 */

// for loop
function binarySearch1(arr: number[], target: number): number {
    const length = arr.length;
    if(length === 0) return -1;

    let startIndex = 0;
    let endIndex = length - 1;

    while(startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);

        const midValue = arr[midIndex];

        // target value small
        if(target < midValue) {
            endIndex = midIndex - 1
        } else if(target > midValue) {
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }

    return -1;
}

const arr = [100, 200, 220, 300, 400, 500, 600];
console.log(binarySearch1(arr, 210));
