function minimumBoxes(apple: number[], capacity: number[]): number {
    let apples = apple.reduce((acc, curr) => acc + curr, 0)
    capacity.sort((a, b) => b - a)

    let i = 0, res = 0
    while(apples > 0) {
        apples -= capacity[i]
        i++
        res++
    }

    return res
};