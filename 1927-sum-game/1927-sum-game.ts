function sumGame(num: string): boolean {
    const n = num.length;
    const half = n / 2;
    
    let sumLeft = 0, sumRight = 0;
    let countLeft = 0, countRight = 0;
    
    for (let i = 0; i < half; i++) {
        if (num[i] === '?') {
            countLeft++;
        } else {
            sumLeft += parseInt(num[i], 10);
        }
    }
    
    for (let i = half; i < n; i++) {
        if (num[i] === '?') {
            countRight++;
        } else {
            sumRight += parseInt(num[i], 10);
        }
    }
    
    if ((countLeft + countRight) % 2 !== 0) {
        return true;
    }
    
    if (2 * (sumLeft - sumRight) === 9 * (countRight - countLeft)) {
        return false;
    }
    
    return true;
}