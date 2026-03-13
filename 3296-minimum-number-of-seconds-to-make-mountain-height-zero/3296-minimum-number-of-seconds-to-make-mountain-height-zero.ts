function valid(T: number, mountainHeight: number, workerTimes: number[]): boolean {
    let total: number = 0

    for(let time of workerTimes) {
        const X = Math.floor(2*T/time)
        total += Math.floor((-1 + Math.sqrt(1 + 4*X)) / 2)

        if(total >= mountainHeight) {
            return true
        }
    }

    return total >= mountainHeight 
}

function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
    let left = Math.min(...workerTimes)
    let right = 0
    const workloadPerWorker = Math.ceil(mountainHeight / workerTimes.length)
    for(let time of workerTimes) {
        right += ((workloadPerWorker + 1) * workloadPerWorker) * time
    }

    let result = 0
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if(valid(mid, mountainHeight, workerTimes)) {
            right = mid - 1
            result = mid
        } else {
            left = mid + 1
        }
    }

    return result
};
