function numTilePossibilities(tiles: string): number {
    const arr =  tiles.split('')
    arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    let res = 0
    const used: boolean[] = new Array(tiles.length).fill(false)

    const backtrack = (path) => {
        if(path.length !== 0) {
            res++
        }

        for(let i = 0; i < tiles.length; i++) {
            if(used[i]) continue
            if(i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue

            path.push(tiles[i])
            used[i] = true

            backtrack(path)

            path.pop()
            used[i] = false
        }
    }

    backtrack([])

    return res
};