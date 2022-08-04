/**
 * @desc traverse DOM tree
 */

 const box = document.getElementById('box')

/**
 * @param n node
 */
function visitNode(n: Node) {
    if (n instanceof Comment) {
        console.log('Comment node', n.textContent)
        return
    }

    if (n instanceof Text) {
        const t = n.textContent?.trim()
        if (t) { console.log('Text node', t) }
        return
    }

    if (n instanceof HTMLElement) {
        console.log('HTMLElement node', `<${n.tagName.toLocaleLowerCase()}>`)
        return
    }
}

/**
 * @param root dom node
 */
function depthFirstTraverse(root: Node) {
    visitNode(root)

    const childNodes = root.childNodes

    if (childNodes.length) {
        childNodes.forEach(child => {
            depthFirstTraverse(child)
        })
    }
}

/**
 * @param root dom node
 */
function breadFirstTraverse(root: Node) {
    const queue: Node[] = []

    // root node enters queue
    queue.push(root)

    while (queue.length > 0) {
        // first in first out
        const curNode = queue.pop()
        if (curNode == null) break

        visitNode(curNode)

        // child node enters queue
        const childNodes = curNode.childNodes
        if (childNodes.length) {
            childNodes.forEach(child => queue.unshift(child))
        }
    }
}


/**
 * usage stack
 * @param root dom node
 */
function depthFirstTraverse2(root: Node) {
    const stack: Node[] = [];

    stack.push(root)

    while(stack.length > 0) {
        const curNode = stack.pop()
        if(curNode == null) break

        visitNode(curNode)

        // child push stack
        const childNodes = curNode.childNodes
        if(childNodes.length > 0) {
            Array.from(childNodes).reverse().forEach(child => stack.push(child))
        }
    }
}

if (box == null) throw new Error('xxxx')
// depthFirstTraverse(box)
// breadFirstTraverse(box)
// depthFirstTraverse2(box)