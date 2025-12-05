function countPartitions(nums: number[]): number {
    let n = nums.length, res = 0
    let total = nums.reduce((acc, curr) => acc + curr, 0)
    let leftTotal = nums[0]
    let rightTotal = total - leftTotal
    for(let i = 1; i < n; i++) {
        //ta sẽ có 2 mảng con với partition là i
        //[0, i], [i + 1 -> n - 1]

        if((rightTotal - leftTotal) % 2 === 0) {
            res++
        }
        leftTotal += nums[i]
        rightTotal -= nums[i]
    }

    return res
};

//trả về số partition trong đó tổng mảng con bên trái và bên phải có hiệu là số chẵn