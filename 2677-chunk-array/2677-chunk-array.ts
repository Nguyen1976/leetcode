type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {

    let result = []

    let i = 0
    let j = 0
    while(i < arr.length) {
        result.push(arr.slice(i, i + size))
        i += size
    }

    return result
};
