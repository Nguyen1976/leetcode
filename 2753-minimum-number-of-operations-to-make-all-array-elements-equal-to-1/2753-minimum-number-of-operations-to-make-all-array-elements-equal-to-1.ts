function minOperations(nums: number[]): number {
    let gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b)
    }
    let operations = Infinity

    let g = nums[0]
    for(let x of nums) g = gcd(g, x)
    if(g !== 1) return -1

    let ones = nums.filter(x => x === 1).length
    if (ones > 0) return nums.length - ones;

    for(let i = 0; i < nums.length; i++) {
        let g = nums[i]
        for(let j = i + 1; j < nums.length; j++) {
            g = gcd(g, nums[j]);
            if (g === 1) {
                operations = Math.min(operations, j - i + 1);
                break;
            }
        }
    }

    return (operations - 1) + (nums.length - 1);
};
/**
    Tìm ra cặp liền kề có gcd là 1 rồi thay thế 1 trong số đó
    sau khi có 1 thì có thể đảm bảo ucln của các thằng còn lại đề có thể trở thành 1
 */