function sumFourDivisors(nums: number[]): number {
    let res = 0
    let cached = new Map<number, number>()
    for (let num of nums) {
        let count = 0
        let sum = 0
        if(cached.has(num)) {
            res += cached.get(num)
            continue
        }

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

                if (count > 4) {
                    cached.set(num, 0)
                    break
                }
            }
        }

        if (count === 4) {
            cached.set(num, sum)
            res += sum
        }
    }

    return res
}
