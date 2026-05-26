function numberOfSpecialChars(word: string): number {
    const lower = new Set<string>()
    const upper = new Set<string>()

    for (const c of word) {
        if (c >= 'a' && c <= 'z') {
            lower.add(c)
        } else {
            upper.add(c)
        }
    }

    let count = 0

    for (const c of lower) {
        if (upper.has(c.toUpperCase())) {
            count++
        }
    }

    return count
}