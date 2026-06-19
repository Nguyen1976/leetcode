function largestAltitude(gain: number[]): number {
    let prev = 0
    gain.push(0)
    let result = 0
    for(let i = 0; i < gain.length; i++) {
        result = Math.max(prev, result)
        let temp = gain[i]
        gain[i] = prev
        prev += temp
    }

    return result
};