function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (const asteroid of asteroids) {
        let destroyed: boolean = false;

        while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        asteroid < 0
        ) {
        if (stack[stack.length - 1] < -asteroid) {
            stack.pop();
        } else if (stack[stack.length - 1] === -asteroid) {
            stack.pop();
            destroyed = true;
            break;
        } else {
            destroyed = true;
            break;
        }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
};