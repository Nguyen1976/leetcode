function reverse(x: number): number {
    let result
    let arr = String(x).split('').reverse()
    if(arr[arr.length - 1] === '-') {
        result = Number(arr.slice(0, arr.length - 1).join('')) * -1
    } else {
        result = Number(arr.join(''))
    }
    return result > Math.pow(-2, 31) && result < (Math.pow(2, 31) - 1) ? result : 0
};