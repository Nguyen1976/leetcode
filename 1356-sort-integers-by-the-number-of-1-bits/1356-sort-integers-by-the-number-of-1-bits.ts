const countBitOne = (n: number) => {
    let count = 0
    while(n > 0) {
        count += (n & 1)
        n >>= 1
    }

    return count
}

function sortByBits(arr: number[]): number[] {
    arr.sort((a, b) => {
        let numberBitOfA = countBitOne(a)
        let numberBitOfB = countBitOne(b)

        if(numberBitOfA === numberBitOfB) {
            return a - b
        }
        return numberBitOfA - numberBitOfB
    })
    return arr
};