function findXSum(nums: number[], k: number, x: number): number[] {
    let left = 0, right = k
    let results = []

    while(right <= nums.length) {

        //phân tích tần suất của mảng [left.... right)
        let map = new Map()
        let tempArr = nums.slice(left, right)
        for(let num of tempArr) {
            map.set(num, map.has(num) ? (map.get(num) + 1) : 1)
        }
        
        //lấy ra x thằng có tần xuất lớn nhất nếu tần suất bằng nhau thì lấy ra lớn nhất
        let tempArr2 = Array.from(map).sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : b[0] - a[0])
        let currSum = 0
        for(let i = 0; i < x; i++) {
            if(tempArr2[i]) {
                currSum += tempArr2[i][0] * tempArr2[i][1]
            }
        }

        results.push(currSum)
        left++
        right++
    }

    return results
};

/**
Chỉ giữ lại các lần xuất hiện của phần tử x thường xuyên nhất. Nếu hai phần tử có cùng số lần xuất hiện thì phần tử có giá trị lớn hơn được coi là thường xuyên hơn

sliding window = k
top = x
 */