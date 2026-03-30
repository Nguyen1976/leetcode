function checkStrings(s1: string, s2: string): boolean {
    const even1 = s1
        .split('')
        .filter((_, i) => i % 2 === 0)
        .sort((a, b) => a.localeCompare(b))
        .join('');

    const odd1 = s1
        .split('')
        .filter((_, i) => i % 2 !== 0)
        .sort((a, b) => a.localeCompare(b))
        .join('');

    const even2 = s2
        .split('')
        .filter((_, i) => i % 2 === 0)
        .sort((a, b) => a.localeCompare(b))
        .join('');

    const odd2 = s2
        .split('')
        .filter((_, i) => i % 2 !== 0)
        .sort((a, b) => a.localeCompare(b))
        .join('');

    return even1 === even2 && odd1 === odd2;
}