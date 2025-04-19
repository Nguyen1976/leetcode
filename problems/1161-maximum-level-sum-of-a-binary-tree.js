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
var maxLevelSum = function (root) {
  let level = 1,
    maxLevel = 1,
    maxSum = root.val

  const queue = [root]

  while (queue.length > 0) {
    let size = queue.length //Lấy size hiện tại
    let sum = 0

    for (let i = 0; i < size; i++) {
      //lặp qua đúng các node mà đang ở tầng hiện tại
      const node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
        //Những lần push này sẽ là sử lý cho tầng tiếp theo khi sang vòng while mới thì kích cỡ queue là tẩng số node ở tầng đó luôn
    }

    // Cập nhật max sum và level nếu cần
    if (maxSum < sum) {
      maxSum = sum
      maxLevel = level
    }
    level++
  }

  return maxLevel
}

//Có thể hiểu như này qua mỗi level thì chúng ta sẽ phải lấy hết tổng của chúng
