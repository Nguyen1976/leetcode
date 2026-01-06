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

function maxLevelSum(root: TreeNode | null): number {
    if(!root) return 0
    if(!root.left && !root.right) return root.val
    const queue = [root]
    let level = 1, maxLevel = 1, maxTotal = -Infinity
    while(queue.length > 0) {
        let total = 0
        let currLevel = queue.length
        for(let i = 0; i < currLevel; i++) {
            let curr = queue.shift()
            total += curr.val
            if(curr?.left) queue.push(curr.left)
            if(curr?.right) queue.push(curr.right)
        }

        if(maxTotal < total) {
            maxTotal = total
            maxLevel = level
        }

        level++
    }

    return maxLevel
};