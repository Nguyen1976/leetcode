/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0)
  dummy.next = head

  let first = dummy
  let second = dummy

  // Di chuyển first n+1 bước để cách second n bước
  for (let i = 0; i <= n; i++) {
    //di chuyển n+1 vì hiện tại đang ở dummy
    first = first.next
  }

  // Di chuyển cả hai cho đến khi first đến cuối
  while (first !== null) {
    first = first.next
    second = second.next
  }

  // second.next là node cần xóa
  second.next = second.next.next

  return dummy.next
}
