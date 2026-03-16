function getBiggestThree(grid: number[][]): number[] {
    let n = grid.length, m = grid[0].length
    const sums = new Set<number>();
    const valid = (i, j, level) => {
        return i + level < n && i - level >= 0 && j + level < m && j - level >= 0
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let center = grid[i][j]

            sums.add(grid[i][j]);

            let level = 1

            while(valid(i, j, level)) {
                  let total = 0;
                  // 4 đỉnh
                total += grid[i - level][j];
                total += grid[i][j + level];
                total += grid[i + level][j];
                total += grid[i][j - level];


                // top -> right
                for (let k = 1; k < level; k++)
                    total += grid[i - level + k][j + k];

                // right -> bottom
                for (let k = 1; k < level; k++)
                    total += grid[i + k][j + level - k];

                // bottom -> left
                for (let k = 1; k < level; k++)
                    total += grid[i + level - k][j - k];

                // left -> top
                for (let k = 1; k < level; k++)
                    total += grid[i - k][j - level + k];


                sums.add(total);

                level++
            }
        }
    }

    return Array.from(sums)
        .sort((a, b) => b - a)
        .slice(0, 3);
};

//ý tưởng mỗi grid cell đều có thể là tâm của hình thoi
/**
Ta sẽ đặt ra các level
level 0 là giá trị chính ô vuông đó
level 1 là hình thoi với các cạnh của tôi
level 2 là mở rộng ra từ tâm cách tâm 1 ô vuông 
ta cần có hàm valid để check xem nó có valid với các level k
vì chỉ cần 3 giá trị lớn nhất lên sẽ đặt ra 3 biến max
ở mỗi hình thoi ta đề đặt ra 4 cạnh
top right bottom và left
ví dụ từ top -> right sẽ phải cộng cả i và j cho đến khi = với giá trị right
right bottom + -
bottom left - -
left top - +



 */