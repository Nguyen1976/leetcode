function rotateString(s: string, goal: string): boolean {
    const arr = s.split('')
    if(s === goal) return true
    const rotateRight = (k: number) => {
        const n = arr.length
        k = k % n

        const reverse = (l: number, r: number) => {
            while (l < r) {
                [arr[l], arr[r]] = [arr[r], arr[l]]
                l++
                r--
            }
        }

        reverse(0, n - 1)
        reverse(0, k - 1)
        reverse(k, n - 1)
    }

    const idxs = []
    for(let i = 0; i < s.length; i++) {
        if(goal[i] === s[0]) {
            idxs.push(i)
        }
    }

    for(let i = 0; i < idxs.length; i++) {
        if(i === 0) {
            rotateRight(idxs[i])
        } else {
            rotateRight(idxs[i] - idxs[i - 1])
        }
        if(arr.join('') === goal) return true
    }

    return false
};