/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    const dfs = (node: TreeNode | null): [TreeNode | null, number] => {
        if(!node) return [null, 0]

        const [leftNode, leftDepth] = dfs(node.left)
        const [rightNode, rightDepth] = dfs(node.right)

        if (leftDepth === rightDepth) {
            return [node, leftDepth + 1]
        }

        if (leftDepth > rightDepth) {
            return [leftNode, leftDepth + 1]
        }

        return [rightNode, rightDepth + 1]
    }

    return dfs(root)[0]
};