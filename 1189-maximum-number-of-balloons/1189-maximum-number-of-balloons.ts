function maxNumberOfBalloons(text: string): number {
    const map = new Map<string, number>()
    for(let c of text) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    return Math.min(
        map.get('b') ?? 0,
        map.get('a') ?? 0,
        Math.floor((map.get('l') ?? 0) / 2),
        Math.floor((map.get('o') ?? 0) / 2),
        map.get('n') ?? 0
    );
};