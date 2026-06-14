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
class ListNode2 {
    val: number;
    next: ListNode2 | null;
    prev: ListNode2 | null;

    constructor(
        val?: number,
        next?: ListNode2 | null,
        prev?: ListNode2 | null
    ) {
        this.val = val ?? 0;
        this.next = next ?? null;
        this.prev = prev ?? null;
    }
}

function buildDoublyLinkedList(head: ListNode | null): ListNode2 | null {
    if (!head) return null;

    const dummyHead = new ListNode2(head.val);
    let curr1 = head.next;

    let curr2 = dummyHead;

    while (curr1) {
        const node = new ListNode2(curr1.val);

        curr2.next = node;
        node.prev = curr2;

        curr2 = node;
        curr1 = curr1.next;
    }

    return dummyHead;
}

function pairSum(head: ListNode | null): number {
    let n = 0;
    let curr = head;

    while (curr) {
        n++;
        curr = curr.next;
    }

    let left = buildDoublyLinkedList(head);
    if (!left) return 0;

    let right = left;

    while (right.next) {
        right = right.next;
    }

    let result = 0;

    for (let i = 0; i < n / 2; i++) {
        result = Math.max(result, left.val + right.val);

        left = left.next!;
        right = right.prev!;
    }

    return result;
}