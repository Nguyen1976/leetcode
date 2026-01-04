function sumFourDivisors(nums: number[]): number {
    let res = 0

    for (let num of nums) {
        let count = 0
        let sum = 0

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                let j = num / i

                if (i === j) {
                    count += 1
                    sum += i
                } else {
                    count += 2
                    sum += i + j
                }

                if (count > 4) break
            }
        }

        if (count === 4) {
            res += sum
        }
    }

    return res
}
