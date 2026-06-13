function mapWordWeights(words: string[], weights: number[]): string {
    let result = ''
    for(let word of words) {
        let total = 0
        for(let c of word) {
            total += weights[c.charCodeAt(0) - 97]
        }
        total %= 26
        result += String.fromCharCode(97 + 26 - total - 1)

    }
    return result
};