function twoEditWords(queries: string[], dictionary: string[]): string[] {
    const result: string[] = []

    for(let i = 0; i < queries.length; i++) {
        let w1 = queries[i]
        for(let j = 0; j < dictionary.length; j++) {
            //tìm điểm khác biệt của mỗi cặp từ
            let w2 = dictionary[j]
            if(w1 === w2) {
                result.push(w1)
                break
            }
            let diff = 0
            for(let k = 0; k < w1.length; k++) {
                if(w1[k] !== w2[k]) diff++
            }
            if(diff <= 2) {
                result.push(w1)
                break
            }
        }
    }

    return result
};