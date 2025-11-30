type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    console.log(obj)
    if(Object.keys(obj).length > 0) {
        return false
    }
    return true
};