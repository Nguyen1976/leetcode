/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let dfs = (node , maxSoFar) => {
        if(!node) return 0
    
        let good = 0
        if(node.val >= maxSoFar) {//nếu node hiện tại lớn hơn bằng node cũ
            good = 1
        }
        
        let newMax = Math.max(maxSoFar, node.val)//cập nhật lại max mới
    
        let left = dfs(node.left, newMax); //kết quả cây con trái
        let right = dfs(node.right, newMax);//kết quả cây con phải
    
        return good + left + right//kết quả
    }
    if(!root) return 0 

    return dfs(root, root.val)
};