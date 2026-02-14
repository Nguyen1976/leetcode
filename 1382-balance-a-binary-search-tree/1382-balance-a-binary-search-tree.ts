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


function balanceBST(root: TreeNode | null): TreeNode | null {
    //duyệt in order left -> root -> right
    const arr = []

    const inOrder = (node: TreeNode | null) => {
        if(!node) return
        inOrder(node.left)
        arr.push(node.val)
        inOrder(node.right)
    }

    inOrder(root)

    //build tree
    const build = (left: number, right: number): TreeNode | null => {
        if(left > right) return null
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(arr[mid]);

        node.left = build(left, mid - 1)
        node.right = build(mid + 1, right)

        return node;
    }

    return build(0, arr.length - 1)
};