/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null

  const nodes = new Map()

  const dfs = (originalNode) => {
    if (nodes.has(originalNode.val)) {
      //nếu node đã được tạo thì trả về node đó từ trong map
      return nodes.get(originalNode.val)
    }

    const node = new _Node(originalNode.val) //tạo node mới
    nodes.set(originalNode.val, node) //đưa vào map để không phải tạo lại node ở những lần tiếp theo nữa

    for (const neighbor of originalNode.neighbors) {
      node.neighbors.push(dfs(neighbor)) //node hiện tại vừa được tạo sẽ có neighbors là những thàng node của node cũ gọi lại dfs để tạo node
    }

    return node
  }

  return dfs(node)
}

//ý tưởng: sử dụng map dạng để lưu những node đã được khởi tạo và gọi dfs khi cần tạo node mới
