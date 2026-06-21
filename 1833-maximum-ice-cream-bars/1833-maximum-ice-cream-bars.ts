function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b) => a - b)
    let res = 0
    for(let i = 0; i < costs.length; i++) {
        coins -= costs[i]
        if(coins >= 0) {
            res++
        }
    }

    return res
};
