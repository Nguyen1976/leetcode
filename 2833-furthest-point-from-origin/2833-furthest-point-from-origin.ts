function furthestDistanceFromOrigin(moves: string): number {
    //count left and right
    const n = moves.length
    let left = 0, right = 0
    for(let i = 0; i < moves.length; i++) {
        if(moves[i] === 'L') {
            left++
            continue
        }
        if(moves[i] === 'R') {
            right++
            continue
        }
    }
    return right >= left ? (n - left) - left : (n - right) - right
};