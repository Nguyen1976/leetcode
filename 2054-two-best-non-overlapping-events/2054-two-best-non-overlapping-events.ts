function maxTwoEvents(events: number[][]): number {
    events.sort((a, b) => a[1] - b[1])

    const n = events.length
    const ends = new Array(n)
    const best = new Array(n)

    for (let i = 0; i < n; i++) {
        ends[i] = events[i][1]
        best[i] = i === 0
            ? events[i][2]
            : Math.max(best[i - 1], events[i][2])
    }

    let ans = 0

    for (let i = 0; i < n; i++) {
        const [start, , value] = events[i]

        ans = Math.max(ans, value)

        //tìm event trước đó có end <= start - 1 tư duy ngược so với sort theo start
        let left = 0, right = i - 1, idx = -1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (ends[mid] <= start - 1) {
                idx = mid
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        if (idx !== -1) {
            //minhf đã sắp xếp end vậy lên khi tìm được idx phù hợp thì tức từ idx này đến tất cả trước đó đều k là trồng chéo vậy lên mảng best cho ta biết từ idx đổ về 0 thì nó lưu dược cái value best nhất
            ans = Math.max(ans, value + best[idx])
        }
    }

    return ans
};

/*
Hai sự kiện không chồng chéo nhau tốt nhất
cho 1 mảng 2D chứa các events
mỗi event sẽ là start end và value
*/