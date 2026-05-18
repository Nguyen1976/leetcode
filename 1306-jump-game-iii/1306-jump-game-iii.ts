function canReach(arr: number[], start: number): boolean {
    const n = arr.length
    const queue: number[] = [start]
    const visited = new Set<number>()

    while (queue.length > 0) {
        const currIdx = queue.shift()!

        // đã đi rồi thì bỏ qua
        if (visited.has(currIdx)) continue
        visited.add(currIdx)

        // gặp số 0
        if (arr[currIdx] === 0) {
            return true
        }

        const next1 = currIdx + arr[currIdx]
        const next2 = currIdx - arr[currIdx]

        // nhảy phải
        if (next1 >= 0 && next1 < n) {
            queue.push(next1)
            
        }

        // nhảy trái
        if (next2 >= 0 && next2 < n) {
            queue.push(next2)
        }
    }

    return false
}
/**
khi tại i có thể nhảy đến 
i + arr[i]
i - arr[i]
kiểm tra nếu bạn có thể đến bất kì index nào với giá trị 0
tức nếu được value 0 là true còn k thì false
bfs

 */