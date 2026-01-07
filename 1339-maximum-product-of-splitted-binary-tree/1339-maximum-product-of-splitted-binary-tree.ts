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

function maxProduct(root: TreeNode | null): number {
    const mod = 1e9 + 7
    let totalSum = 0
    let maxProd = 0

    //tính tổng

    const sumTree = (node: TreeNode | null) => {
        if(!node) return 0
        return node.val + sumTree(node.right) + sumTree(node.left)
    }

    totalSum = sumTree(root)

    const dfs = (node: TreeNode | null): number => {
        if(!node) return 0

        const leftSum = dfs(node.left)
        const rightSum = dfs(node.right)

        const subSum = node.val + leftSum + rightSum

        maxProd = Math.max(
            maxProd,
            subSum * (totalSum - subSum)
        )

        return subSum
    }

    dfs(root)

    return maxProd % mod
};
