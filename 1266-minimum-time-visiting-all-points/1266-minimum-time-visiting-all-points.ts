function minTimeToVisitAllPoints(points: number[][]): number {
    let visits: number = 0
    let x = 0, y = 0

    for(let i = 0; i < points.length - 1; i++) {
        x = Math.abs(points[i + 1][0] - points[i][0])
        y = Math.abs(points[i + 1][1] - points[i][1])
        visits += Math.max(x, y)
    }

    return visits
};