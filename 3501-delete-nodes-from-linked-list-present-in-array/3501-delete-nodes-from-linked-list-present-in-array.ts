/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    if(!head) return head
    let curr = head
    let set = new Set(nums)

    //chuẩn hóa phần đầu
    while(set.has(curr.val)) {
        curr = curr.next
        head = curr
    }



    while(curr.next) {
        //tìm đến phần tử hợp lệ
        while(set.has(curr.next?.val)) {
            curr.next = curr.next.next
        }
        if(!curr.next) break
        curr = curr.next
    }

    return head
};