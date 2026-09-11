/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const m = new Map();
    let r = 0;
    let s = "";

    const isEven = new Map();

    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            isEven.set(String(i), true);
        }
    }

    for (const d of digits) {
        s += String(d);
    }

    for (let i = 0; i < s.length; i++) {
        const x = s[i];

        if (x === "0") {
            continue;
        }

        for (let j = 0; j < s.length; j++) {
            if (j !== i) {
                for (let k = 0; k < s.length; k++) {
                    if (k !== j && k !== i && isEven.has(s[k])) {
                        const n = Number(x + s[j] + s[k]);

                        if (!m.has(n)) {
                            m.set(n, true);
                            r++;
                        }
                    }
                }
            }
        }
    }

    return r;
}