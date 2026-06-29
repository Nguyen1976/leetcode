function numOfStrings(patterns: string[], word: string): number {
    return patterns.filter(e => word.includes(e)).length
};