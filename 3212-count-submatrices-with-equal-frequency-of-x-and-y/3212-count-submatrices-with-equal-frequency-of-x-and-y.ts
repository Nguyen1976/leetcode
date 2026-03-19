
function numberOfSubmatrices(grid: string[][]): number {
  const n = grid.length, m = grid[0].length
  const col = Array.from({length: m}, () => ({
    'X': 0,
    'Y': 0
  }))
  let result = 0

    for(let i = 0; i < n; i++) {
        let row = {
            'X': 0,
            'Y': 0
        }
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === 'X') {
                col[j]['X'] += 1
            } else if(grid[i][j] === 'Y') {
                col[j]['Y'] += 1
            }
            row['X'] += col[j]['X']
            row['Y'] += col[j]['Y']
            if(row['X'] == row['Y'] && row['X'] > 0) result++
        }
    }

    return result
};