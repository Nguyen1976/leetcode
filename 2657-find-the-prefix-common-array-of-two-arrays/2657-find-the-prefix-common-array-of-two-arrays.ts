function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length
    const seen = new Array(n + 1).fill(0)
    const res = new Array(n)

    let common = 0

    for(let i = 0; i < n; i++) {
        seen[A[i]]++

        if(seen[A[i]] === 2) {
            common++
        }

        seen[B[i]]++

        if(seen[B[i]] === 2) {
            common++
        }

        res[i] = common
    }

    return res
}