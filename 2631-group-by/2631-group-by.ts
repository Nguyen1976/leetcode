interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    let res = {}
    for(let item of this) {
        let key = fn(item)
        if(res[key]) {
            res[key].push(item)
        } else {
            res[key] = [item]
        }
    }
    return res
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */