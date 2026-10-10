function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length
    const ans = Array(n).fill(0)
    const stack = []
    for(let i = 0; i < n; i++) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevDay = stack.pop()!
            ans[prevDay] = i - prevDay
        }
        stack.push(i)
    }
    return ans
};