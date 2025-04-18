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
 * @return {number[]}
 */
// var rightSideView = function (root) {
//   if (!root) return []
//   const result = []
//   const queue = [root]

//   while (queue.length > 0) {
//     const levelSize = queue.length
//     for (let i = 0; i < levelSize; i++) {
//       const current = queue.shift()

//       if (i === levelSize - 1) {
//         result.push(current.val)
//       }

//       if (current.left) queue.push(current.left)
//       if (current.right) queue.push(current.right)
//     }
//   }

//   return result
// }

//Đề bài: lấy những node bên phải nhất của từng tầng

//Ban đầu level size sẽ là node đầu tiên và level size là 1 ở lần đầu
//Chúng ta phải push left trước vì khi đó sẽ so sánh i và kích thức của queue và mới có thể lẩy ra node bên phải nhất


//Sử dụng dfs
var rightSideView = function (root) {
    if(!root) return []
    const result = []

    const dfs = (node, level = 0) => {
        if(!node) return

        if(result.length === level) {
            result.push(node.val)
        }

        dfs(node.right, level + 1)
        dfs(node.left, level + 1)
    }

    dfs(root, 0)

    return result
}