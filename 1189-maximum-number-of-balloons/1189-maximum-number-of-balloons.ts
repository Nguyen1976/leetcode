function maxNumberOfBalloons(text: string): number {
    const map = new Map<string, number>()
    for(let c of text) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let result = 0
    while(map.get('b') >= 1 && map.get('a') >= 1 && map.get('l') >= 2 && map.get('o') >= 2 && map.get('n') >= 1) {
        //trừ đi 1:b, 1:a, 2:l, 2:o, 1:n

        map.set('b', map.get('b') - 1)
        map.set('a', map.get('a') - 1)
        map.set('l', map.get('l') - 2)
        map.set('o', map.get('o') - 2)
        map.set('n', map.get('n') - 1)
        result++ 
    }

    return result
};