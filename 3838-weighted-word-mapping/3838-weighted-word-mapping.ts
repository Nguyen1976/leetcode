function mapWordWeights(words: string[], weights: number[]): string {
    return words.map(word => String.fromCharCode(97 + 25 - ([...word].reduce((acc, c) => acc + weights[c.charCodeAt(0) - 97], 0) % 26))).join('')
};