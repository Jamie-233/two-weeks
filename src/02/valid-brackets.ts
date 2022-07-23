function isValid(left: string, right: string): boolean {
    if (left === '{' && right === '}') return true
    if (left === '(' && right === ')') return true
    if (left === '[' && right === ']') return true

    return false
}

export function validBrackets(str: string): boolean {
    const length = str.length;
    if (length === 0) return true;

    const stack = [];
    const leftSymbols = '{[(';
    const rightSymbols = ')]}';

    for (let i = 0; i < length; i++) {
        const s = str[i];

        if (leftSymbols.includes(s)) {
            stack.push(s)
        } else if (rightSymbols.includes(s)) {
            const top = stack[stack.length - 1]

            if (isValid(top, s)) {
                stack.pop();
            } else {
                return false
            }
        }
    }

    return stack.length === 0;
}

// const str = '{a{b[c([d)e]f}i}g';
// console.log(validBrackets(str));

