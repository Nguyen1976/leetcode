/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head
  let odd = head //lẻ theo vị trí thực chứ không phải index
  let even = head.next

  let evenHead = even //ghi nhớ cái even ban đầu
  let oddHead = odd

  while (even && even.next) {
    //trong vòng lặp vì chúng ta lấy even.next để cập nhật odd trước lên phải xét điều kiện là even.next phải tồn tại
    odd.next = even.next //next tiếp theo của even là lẻ sẽ gán vào odd
    odd = odd.next //lặp qua odd tiếp theo

    //tại sao phải cập nhật odd.next trước
    //vì odd được gán bằng head lên chúng ta luôn luôn biết được là odd luôn luôn có next nếu trường hợp linklist <= 2 phần tử
    //và even sẽ là phần tử tiếp theo lên even là thứ chúng ta k kiểm soát được
    //đó là lý do điều kiện trên vòng while phải là tồn tại even

    even.next = odd.next //odd.next là even lên gán vào even
    even = even.next //next qua even tiếp theo
  }

  odd.next = evenHead

  return oddHead
}
