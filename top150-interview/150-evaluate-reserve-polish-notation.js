/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let caculator = (num1, num2, type) => {
        switch(type) {
            case "+":
                return num2 + num1
            case "-":
                return num2 - num1
            case "*":
                return num2 * num1
            case "/":
                return Math.trunc(num2 / num1);
        }
    }

    function isDigit(token) {
        return !isNaN(token);
    }
    let stack = []

    for(let token of tokens) {
        if(isDigit(token)) {
            stack.push(Number(token))
        } else {
            let num1 = stack.pop()
            let num2 = stack.pop()

            stack.push(caculator(num1, num2, token))
        }
    }
    return stack[0]
};

//