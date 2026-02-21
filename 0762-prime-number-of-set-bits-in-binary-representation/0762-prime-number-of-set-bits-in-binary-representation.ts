function countPrimeSetBits(left: number, right: number): number {
    const countSetBits = (n: number): number => {
        let count = 0;

        while (n > 0) {
            count += (n & 1);  
            n >>= 1;        
        }

        return count;
    }

    let result = 0
    const primeSet = new Set([2,3,5,7,11,13,17,19]);

    for(let i = left; i <= right; i++) {
        let numberOfSetBits = countSetBits(i)
        if(primeSet.has(numberOfSetBits)) result++
    }

    return result
};