/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const build = (preorder, inorder) => {
        if(inorder.length) {
            const idx = inorder.indexOf(preorder.shift()) // tìm index của phần tử đầu tiên
            const root = new TreeNode(inorder[idx])

            //2 phần trái phải của inorder tương tự là cây con trái và cây con phải
            root.left = build(preorder, inorder.slice(0, idx));
            root.right = build(preorder, inorder.slice(idx + 1));

            return root
        }
        return null
    }
    return build(preorder, inorder)
};

/**
    preorder: duyệt ngang
    inorder: duyệt trung

    trong pre thì node đầu là gốc
 */