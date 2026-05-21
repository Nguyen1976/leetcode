function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixs = new Set<number>()

    for(let i = 0; i < arr1.length; i++) {
        let x = arr1[i]
        while(x > 0) {
            prefixs.add(x)
            x = Math.floor(x / 10)
        }
    }

    let res = 0

    for(let i = 0; i < arr2.length; i++) {
        let x = arr2[i]

        while(x > 0) {
            if(prefixs.has(x)) {
                res = Math.max(res, x.toString().length)
                break
            }
            x = Math.floor(x / 10)
        }
    }

    return res
};