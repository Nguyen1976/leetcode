function minOperations(nums: number[], k: number): number {
    let currSum = nums.reduce((acc, curr) => acc + curr, 0)

    // while(currSum % k !== 0) {
    //     currSum--
    //     operations++
    // }

    return currSum % k
};

/**
Có thể dùng vòng lặp và tăng cho đến khi %k

hoặc ta có thể làm như sau đầu tiên lấy sum % k và trả về số đó là xong

 */