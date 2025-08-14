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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let current = root

    while(current) {
        if(current.left) {//khi còn bên trái tức là chưa biến đổi thì sẽ tiếp tục
            let predecessor = current.left //nhớ node trái của node hiện tại
            while(predecessor.right) {
                predecessor = predecessor.right;//duyệt đến node phải cuối
            }
            predecessor.right = current.right;//node phải cuối của cây con bên trái sẽ là cây con bên phải
            current.right = current.left;//đảo left sang right
            current.left = null;
        }
        current = current.right;//tiếp tục lặp
    }
};
//biến đổi tree thành 1 linked list với right là con trỏ next và thứ tự sẽ theo duyệt tiền root → left → right