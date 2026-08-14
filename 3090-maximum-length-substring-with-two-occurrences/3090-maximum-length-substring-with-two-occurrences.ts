function maximumLengthSubstring(s: string): number {
    let left = 0, result = 0
    let map = new Map<string, number>()
    for(let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1)

        while((map.get(s[right]) || 0) > 2) {
            map.set(s[left], (map.get(s[left]) || 0) - 1)
            left++
        }

        result = Math.max(result, right - left + 1)
    }

    return result
};