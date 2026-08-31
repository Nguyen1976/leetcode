function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let curr = head;
    let prev = curr.val;
    curr = curr.next;

    let idx = 1;

    let firstCritical = -1;
    let prevCritical = -1;
    let minDistance = Infinity;

    while (curr.next) {
        if (
            (curr.val > prev && curr.val > curr.next.val) ||
            (curr.val < prev && curr.val < curr.next.val)
        ) {
            if (firstCritical === -1) {
                firstCritical = idx;
            } else {
                minDistance = Math.min(
                    minDistance,
                    idx - prevCritical
                );
            }

            prevCritical = idx;
        }

        idx++;
        prev = curr.val;
        curr = curr.next;
    }

    if (minDistance === Infinity) {
        return [-1, -1];
    }

    return [
        minDistance,
        prevCritical - firstCritical
    ];
}