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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null || head.next === null || k === 0) return head
    let curr = head, n = 0
    let last
    while(curr) {
        if(curr.next === null) last = curr
        curr = curr.next
        n++
    }
    k = k % n
    curr = head
    for(let i = 0; i < n - 1 - k; i++) {
        curr = curr.next
    }
    last.next = head
    head = curr.next
    curr.next = null

    return head
};