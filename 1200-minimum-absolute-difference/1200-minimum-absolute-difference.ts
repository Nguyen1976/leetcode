function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b)
    let res = []
    let minDiff = Infinity
    for(let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1])
    }
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] - arr[i - 1] === minDiff) {
            res.push([arr[i - 1], arr[i]])
        }
    }
    return res

};