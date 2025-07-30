/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

var mergeTwoLists = function (list1, list2) {
  let dummyNode = new ListNode(-1)
  let temp = dummyNode

  let curr1 = list1,
    curr2 = list2
  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      temp.next = curr1
      curr1 = curr1.next
    } else {
      temp.next = curr2
      curr2 = curr2.next
    }
    temp = temp.next
  }

  temp.next = curr1 !== null ? curr1 : curr2

  return dummyNode.next
}
