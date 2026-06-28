function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    let result = 1
    arr.sort((a, b) => a - b)
    arr[0] = arr[0] === 1 ? arr[0] : 1;
    for(let i = 1; i < arr.length; i++) {
        if(Math.abs(arr[i] - arr[i - 1]) > 1) {
            arr[i] = arr[i - 1] + 1;
        }
        result = Math.max(result, arr[i])
    }

    return result
};