function isValid(s: string): boolean {
    if(s.length % 2 !== 0) return false
    const stack = []
    
    for(let c of s) {
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else {
            const top = stack.pop() || ""
            if((c === ')' && top !== '(')
            || (c === ']' && top !== '[')
            || (c === '}' && top !== '{')) {
                return false
            } 
        }
    }

    return stack.length === 0
};