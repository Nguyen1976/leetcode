function countCoveredBuildings(n: number, buildings: number[][]): number {
    //map sẽ lưu giả sử key tại x thì nó sẽ lưu những phần y match với x có trong bulidings
    //ví dụ tại map[3] = [2, 4, 5]
    //value chính là y tức sẽ tồn tại [3, 2], [3, 4]
    //và giữa vào phía trên cso thể thấy 3, 4 được cover bởi 3, 2 và 3, 5
    //tức sau khi có được data như này thì chỉ cần sort sau đó binary search value và xem nó có đang nằm giữa k 
    const rowMap = new Map<number, number[]>();
    const colMap = new Map<number, number[]>();

    for (const [x, y] of buildings) {
        if (!rowMap.has(x)) rowMap.set(x, []);
        if (!colMap.has(y)) colMap.set(y, []);
        rowMap.get(x)!.push(y);
        colMap.get(y)!.push(x);
    }

    //sort value in map for binary search
    for (const arr of rowMap.values()) arr.sort((a, b) => a - b);
    for (const arr of colMap.values()) arr.sort((a, b) => a - b);

    let res = 0;

    //sử dụng tìm kiếm nhị phân để tìm xem có left và right ở val hiện tại trrong arr k
    function hasLeftRight(arr: number[], val: number): [boolean, boolean] {
        let l = 0, r = arr.length - 1;
        let idx = -1;

        while (l <= r) {
            const mid = (l + r) >> 1;
            if (arr[mid] === val) {
                idx = mid;
                break;
            } else if (arr[mid] < val) l = mid + 1;
            else r = mid - 1;
        }

        const hasLeft = idx > 0;
        const hasRight = idx < arr.length - 1;
        return [hasLeft, hasRight];
    }

    for (const [x, y] of buildings) {
        const row = rowMap.get(x)!;
        const col = colMap.get(y)!;

        const [left, right] = hasLeftRight(row, y);
        const [up, down] = hasLeftRight(col, x);

        if (left && right && up && down) res++;
    }

    return res;
}
