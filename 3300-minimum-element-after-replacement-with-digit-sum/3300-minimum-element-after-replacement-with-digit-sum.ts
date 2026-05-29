function minElement(nums: number[]): number {
    let min = Infinity
    for(let num of nums) {
        const sum = String(num).split('').map((e) => Number(e)).reduce((acc, curr) => acc + curr,0)
        min = Math.min(min, sum)
    }

    return min
};