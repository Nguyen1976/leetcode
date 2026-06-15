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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let curr = head
    let n = 0
    while(curr) {
        n++
        curr = curr.next
    }

    if(n === 1) {
        return null
    }

    let nodeDeleteIdx = Math.floor(n / 2)
    curr = head

    if(nodeDeleteIdx === 0) {
        head = curr.next
        return head
    }

    for(let i = 0; i < nodeDeleteIdx - 1; i++) {
        curr = curr.next
    }
    curr.next = curr.next.next

    return head
};