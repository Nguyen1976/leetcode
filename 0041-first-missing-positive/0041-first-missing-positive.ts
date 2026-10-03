function firstMissingPositive(nums: number[]): number {
    const n = nums.length
    for(let i = 0; i < n; i++) {
        while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[i]
            const correctIdx = nums[i] - 1
            nums[i] = nums[correctIdx];
            nums[correctIdx] = temp;
        }
    }
    for(let i = 0; i < n; i++) {
        if(nums[i] !== i + 1) {
            return i + 1
        }
    }

    return n + 1
};

//tư duy như sau chúng ta sẽ loại bỏ những số k khả quan bằng cách đưa nó vào vị trí sai và đưa những số trong khoảng n vào đúng index của nó thì những số k trong khoảng n sẽ là số chúng ta k quan tâm lúc này sẽ lặp từ dưới lên số nào bị sai lệch sẽ là số bị thiếu nếu nó fit toàn bộ vậy thì số cần tìm là n + 1