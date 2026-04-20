function maxDistance(colors: number[]): number {
    let result = 0
    for(let i = 0; i < colors.length; i++) {
        for(let j = 0; j < colors.length; j++) {
            if(colors[i] !== colors[j]) {
                result = Math.max(result, Math.abs(i - j))
            }
        }
    }

    return result
};