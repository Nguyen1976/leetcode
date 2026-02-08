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

function isBalanced(root: TreeNode | null): boolean {
    let balanced = true
    const dfs = (node: TreeNode | null): number => {
        if(node == null) {
            return 0
        }
        const l = dfs(node.left)
        const r = dfs(node.right) 
        if(Math.abs(l - r) > 1) {
            balanced = false
        }

        return Math.max(l, r) + 1
    }
    dfs(root)
    return balanced
};

//cây cân bằng là độ sâu của mỗi node không khác nhau quá 1