function maxSubarraySum(nums: number[], k: number): number {
    const minPrefix = new Array(k).fill(Infinity)
    minPrefix[0] = 0

    let prefix = 0
    let ans = -Infinity

    for(let i = 0; i < nums.length; i++) {
        prefix += nums[i]
        const mod = (i + 1) % k// vì để bài yêu cầu là kích thước của sub arr hiện tại phải chi hết cho k

        //Nếu 1 prefix trước đó có có odoj dài và hiện tại đều có mod cùng là 1 số

        if(minPrefix[mod] != Infinity) {
            ans = Math.max(ans, prefix - minPrefix[mod])//hiểu là prefix cũng có dư là mod trừ đi minPrefix tức là 1 cái prefix nào đó trước đó dũng có  minPrefix[mod] dư là mod thì ta thu được tổng của subarr này

            //tức là trường hợp prefix này và prefix trước đó có cùng mod
        }

        if(prefix < minPrefix[mod]) {//luôn update khi có 1 prefix tối ưu hơn ở mod hiện tại
            minPrefix[mod] = prefix
        }
    }

    return ans
};


//Ta sẽ dùng prefix sum + module
/**
    prefix[i] = tổng từ A[0] → A[i]
    sub = prefix[r] - prefix[l] tổng của 1 sub nums có tổng từ l + 1 đến r

    => để sub arr chia hết cho k ta có
    (prefix[r] - prefix[l] ) % k == 0
    => prefix[r] % k == prefix[l] % k

    Approach
    mod = prefix[i] % k

    mod = ((prefix % k) + k) % k module chuẩn hóa khi có số âm

    best[mod] = prefix nhỏ nhất có phần dư mod

    sub = prefix[i] - best[mod]

    mod sai phải mod của độ dài sub arr


 */