function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    asteroids.sort((a, b) => a - b)
    for(let ast of asteroids) {
        if(mass >= ast) {
            mass += ast
        } else {
            return false
        }
    }

    return true
};