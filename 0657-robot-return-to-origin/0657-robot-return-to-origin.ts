function judgeCircle(moves: string): boolean {
    let x = 0, y = 0
    for(let c of moves) {
        switch (c) {
            case 'U':
                y += 1
                break
            case 'D':
                y -= 1
                break
            case 'L':
                x -= 1
                break
            case 'R':
                x += 1
                break
            default:
                break
        }
    }

    return x === 0 && y === 0
};