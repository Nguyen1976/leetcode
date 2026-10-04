function calPoints(operations: string[]): number {
    const stack = []

    for(let i = 0; i < operations.length; i++) {
        let currEl = operations[i]
        switch(currEl) {
            case '+':
                stack.push((Number(stack[stack.length - 1]) + Number(stack[stack.length - 2])))
                break
            case 'D':
                stack.push((Number(stack[stack.length - 1]) * 2))
                break
            case 'C':
                stack.pop()
                break
            default:
                stack.push(Number(currEl))
                break
        }
    }
    stack
    return stack.reduce((acc, curr) => acc + curr, 0)
};