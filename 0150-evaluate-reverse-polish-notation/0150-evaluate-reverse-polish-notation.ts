function evalRPN(tokens: string[]): number {
    const stack: number[] = []

    for(let token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const b = stack.pop()!; // The right operand is popped first
            const a = stack.pop()!; // The left operand is popped second

            switch(token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));
                    break;
            }
        } else {
            // Otherwise, it's a number. Parse and push it.
            stack.push(Number(token));
        }
    }

    return stack[0] as number
};