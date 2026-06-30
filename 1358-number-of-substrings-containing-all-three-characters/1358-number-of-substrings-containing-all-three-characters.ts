function numberOfSubstrings(s: string): number {
    const cnt = new Map<string, number>();
    let left = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {
        cnt.set(s[right], (cnt.get(s[right]) || 0) + 1);

        while (
            (cnt.get('a') || 0) > 0 &&
            (cnt.get('b') || 0) > 0 &&
            (cnt.get('c') || 0) > 0
        ) {
            ans += s.length - right;

            cnt.set(s[left], cnt.get(s[left])! - 1);
            left++;
        }
    }

    return ans;
}