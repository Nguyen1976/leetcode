function maxNumberOfBalloons(text: string): number {
    let countA = 0, countB = 0, countL = 0, countO = 0, countN = 0
    for(let c of text) {
        switch(c) {
            case 'a':
                countA++
                break
            case 'b':
                countB++
                break
            case 'l':
                countL++
                break
            case 'o':
                countO++
                break
            case 'n':
                countN++
                break
            default:
                break
        }
    }
    return Math.min(
        countA,
        countB,
        Math.floor(countL / 2),
        Math.floor(countO / 2),
        countN
    );
};