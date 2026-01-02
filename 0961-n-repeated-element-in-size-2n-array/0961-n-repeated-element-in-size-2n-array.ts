function repeatedNTimes(nums: number[]): number {
    const set = new Set<number>()

    for(let n of nums) {
        if(set.has(n)) return n
        set.add(n)
    }

    return -1
};
/**
nums chứa nums.length / 2 + 1 phần tử unique và có 1 phần tử lặp lại nums.length / 2 lần
tìm phần tử đó
phân tích gọi n là tổng phần tử và follow theo properties
n/2 + n/2 (tức phần từ unique và phần tử lặp lại)
vậy chỉ có 1 phần tử trong đây là lặp lại chỉ cần dùng set 

 */