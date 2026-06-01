function minimumCost(cost: number[]): number {
    cost.sort((a, b) => b - a);

    let result = 0;

    for (let i = 0; i < cost.length; i++) {
        if (i % 3 !== 2) {
            result += cost[i];
        }
    }

    return result;
}