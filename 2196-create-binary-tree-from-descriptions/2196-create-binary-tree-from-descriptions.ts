function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const map = new Map<number, TreeNode>()
    const children = new Set<number>()

    for (const [parent, child, isLeft] of descriptions) {
        if (!map.has(parent)) {
            map.set(parent, new TreeNode(parent))
        }

        if (!map.has(child)) {
            map.set(child, new TreeNode(child))
        }

        const parentNode = map.get(parent)!
        const childNode = map.get(child)!

        if (isLeft) {
            parentNode.left = childNode
        } else {
            parentNode.right = childNode
        }

        children.add(child)
    }

    for (const [val, node] of map) {
        if (!children.has(val)) {
            return node
        }
    }

    return null
}