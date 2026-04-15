function closestTarget(words: string[], target: string, startIndex: number): number {
    let minIfRight = Infinity
    let minIfLeft = Infinity
    const n = words.length
    for(let i = 0; i < n; i++) {
        //bắt đầu từ start index
        if(words[(i + startIndex) % n] === target) {
            minIfRight = Math.min(minIfRight, i)
        }
        if(words[(startIndex - i + n) % n] === target) {
            minIfLeft = Math.min(minIfLeft, i)
        }
    }

    let result = Math.min(minIfLeft, minIfRight)

    return result === Infinity ? -1 : result
};