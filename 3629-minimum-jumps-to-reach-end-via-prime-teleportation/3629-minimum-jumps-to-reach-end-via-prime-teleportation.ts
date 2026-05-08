function minJumps(nums: number[]): number {
    const n = nums.length;

    if (n === 1) return 0;

    const MAX = Math.max(...nums);

    // sieve prime
    const isPrime = Array(MAX + 1).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= MAX; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= MAX; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // prime -> indices divisible by prime
    const bucket = new Map<number, number[]>();

    for (let i = 0; i < n; i++) {

        const val = nums[i];

        // tìm factor unique
        let x = val;

        for (let p = 2; p * p <= x; p++) {

            if (x % p === 0) {

                if (!bucket.has(p)) {
                    bucket.set(p, []);
                }

                bucket.get(p)!.push(i);

                while (x % p === 0) {
                    x /= p;
                }
            }
        }

        if (x > 1) {

            if (!bucket.has(x)) {
                bucket.set(x, []);
            }

            bucket.get(x)!.push(i);
        }
    }

    // BFS
    const queue: [number, number][] = [[0, 0]];
    const visited = Array(n).fill(false);

    visited[0] = true;

    let head = 0;

    while (head < queue.length) {

        const [i, step] = queue[head++];

        if (i === n - 1) {
            return step;
        }

        for (const next of [i - 1, i + 1]) {

            if (
                next >= 0 &&
                next < n &&
                !visited[next]
            ) {
                visited[next] = true;
                queue.push([next, step + 1]);
            }
        }

        const val = nums[i];

        if (isPrime[val] && bucket.has(val)) {

            for (const next of bucket.get(val)!) {

                if (!visited[next]) {
                    visited[next] = true;
                    queue.push([next, step + 1]);
                }
            }

            bucket.delete(val);
        }
    }

    return -1;
};