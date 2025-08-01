/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) {
    return head
  }

  const dummy = new ListNode(0, head)
  let prev = dummy

  for (let i = 0; i < left - 1; i++) {
    // di chuyển đến node cần thay
    prev = prev.next
  }

  let cur = prev.next

  for (let i = 0; i < right - left; i++) {
    const temp = cur.next
    cur.next = temp.next
    temp.next = prev.next

    prev.next = temp
  }

  return dummy.next
}
