function minSubarray(nums: number[], p: number): number {
    let total = nums.reduce((a, b) => a + b, 0);
    let target = total % p;

    if (target === 0) return 0;

    let map = new Map<number, number>();
    map.set(0, -1); // prefix before array
    let res = nums.length;

    let prefix = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix = (prefix + nums[i]) % p;//này có thể hiểu là curr

        let need = (prefix - target + p) % p;//để tránh bị âm

        if (map.has(need)) {
            res = Math.min(res, i - map.get(need)!);
        }

        map.set(prefix, i);
    }

    return res === nums.length ? -1 : res;
}


/**
Hướng tư duy bài toán muốn xóa 1 sub arr sao cho phần còn lại chia hết cho p

tức là total = sum(nums)

target = total % p

tức (total - subSum) % p = 0
subSum % p = target


dùng prefix sum để biểu diễn sub arr

prefix[k] = sum(nums[0..k])
subSum(i..j) = prefix[j] - prefix[i-1]

với điều kiện ở trên 
=> (prefix[j] - prefix[i-1]) % p = target

prefix[i-1] % p = (prefix[j] % p - target + p) % p (vì đấy là phép module làm vậy để tránh âm)

gọi curr = prefix[j] % p

need = prefix[i-1] % p = (curr - target + p) % p

tức khi lưu need mình sẽ tính toán như trên



 */