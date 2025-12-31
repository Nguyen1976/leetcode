function isBalanced(num: string): boolean {
    let sumOdd = 0, sumEven = 0
    for(let i = 0; i < num.length; i++) i % 2 === 0 ? sumEven += Number(num[i]) : sumOdd += Number(num[i]) 
    return sumOdd === sumEven
};