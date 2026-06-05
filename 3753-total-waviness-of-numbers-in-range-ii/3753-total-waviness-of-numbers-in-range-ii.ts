function totalWaviness(num1: number, num2: number): number {
    return solve(num2) - solve(num1 - 1)
}

function solve(limit: number): number {
    if (limit < 0) return 0

    const digits = String(limit).split('').map(Number)
    const n = digits.length

    const memo = new Map<string, [number, number]>()

    function dfs(
        pos: number,
        prev1: number,
        prev2: number,
        tight: boolean,
        started: boolean
    ): [number, number] {

        if (pos === n) {
            return [1, 0]
        }

        const key = `${pos}-${prev1}-${prev2}-${started}`

        if (!tight && memo.has(key)) {
            return memo.get(key)!
        }

        const limitDigit = tight ? digits[pos] : 9

        let totalWays = 0
        let totalWavy = 0

        for (let d = 0; d <= limitDigit; d++) {

            const nextTight = tight && d === limitDigit
            const nextStarted = started || d !== 0

            let add = 0

            if (
                nextStarted &&
                prev1 !== -1 &&
                prev2 !== -1
            ) {
                if (
                    (prev1 > prev2 && prev1 > d) ||
                    (prev1 < prev2 && prev1 < d)
                ) {
                    add = 1
                }
            }

            let nextPrev1 = prev1
            let nextPrev2 = prev2

            if (!nextStarted) {
                nextPrev1 = -1
                nextPrev2 = -1
            }
            else if (prev1 === -1) {
                nextPrev1 = d
            }
            else if (prev2 === -1) {
                nextPrev2 = prev1
                nextPrev1 = d
            }
            else {
                nextPrev2 = prev1
                nextPrev1 = d
            }

            const [ways, waviness] = dfs(
                pos + 1,
                nextPrev1,
                nextPrev2,
                nextTight,
                nextStarted
            )

            totalWays += ways
            totalWavy += waviness + ways * add
        }

        const result: [number, number] = [
            totalWays,
            totalWavy
        ]

        if (!tight) {
            memo.set(key, result)
        }

        return result
    }

    return dfs(0, -1, -1, true, false)[1]
}