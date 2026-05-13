function minMoves(nums: number[], limit: number): number {
    const n = nums.length

    // diff[i] = thay đổi số moves tại target i
    const diff = new Array(2 * limit + 2).fill(0)

    for (let i = 0; i < n / 2; i++) {
        let a = nums[i]
        let b = nums[n - 1 - i]

        let low = 1 + Math.min(a, b)
        let high = limit + Math.max(a, b)
        let sum = a + b

        /*
            mặc định mọi target cần 2 moves

            đoạn [low, high] chỉ cần 1 move
            riêng sum cần 0 move
        */

        // bắt đầu với +2
        diff[2] += 2

        // [low, high] giảm 1 move
        diff[low] -= 1
        diff[high + 1] += 1

        // tại sum giảm thêm 1 move => thành 0
        diff[sum] -= 1
        diff[sum + 1] += 1

        // sau sum quay lại 1 move
    }

    let result = Infinity
    let curr = 0

    for (let target = 2; target <= 2 * limit; target++) {
        curr += diff[target]
        result = Math.min(result, curr)
    }

    return result
}