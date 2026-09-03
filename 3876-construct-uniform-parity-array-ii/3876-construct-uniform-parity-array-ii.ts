function uniformArray(nums1: number[]): boolean {
    let minOdd = Infinity;
    let minEven = Infinity;
    let hasOdd = false;
    let hasEven = false;

    for (const num of nums1) {
        if (num % 2 === 0) {
            hasEven = true;
            if (num < minEven) minEven = num;
        } else {
            hasOdd = true;
            if (num < minOdd) minOdd = num;
        }
    }

    if (!hasOdd || !hasEven) {
        return true;
    }

    return minOdd < minEven;
};