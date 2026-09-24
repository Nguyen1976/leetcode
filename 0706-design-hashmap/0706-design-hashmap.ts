const TABLE_SIZE = 1000;

function hashFunction(n: number) {
    let res = 0;

    while (n > 0) {
        const remain = n % 10;
        res += remain;
        n = (n - remain) / 10;
    }

    return res % TABLE_SIZE;
}

class MyHashMap {
    private dict: Array<Array<[number, number]>> = [];

    find(key: number): [number, number, number] {
        const keyNum = hashFunction(key);
        if (this.dict[keyNum]) {
            for (let i = 0; i < this.dict[keyNum].length; i++) {
                if (this.dict[keyNum][i][0] === key) {
                    return [keyNum, i, this.dict[keyNum][i][1]];
                }
            }
        }

        return [keyNum, -1, -1];
    }

    put(key: number, value: number): void {
        const [keyNum, index] = this.find(key);

        if (index === -1) {
            if (this.dict[keyNum]) {
                this.dict[keyNum].push([key, value]);
            } else {
                this.dict[keyNum] = [[key, value]];
            }
        } else {
            this.dict[keyNum][index][1] = value
        }
    }

    remove(key: number): void {
        const [keyNum, index] = this.find(key);

        if (index !== -1) {
            this.dict[keyNum].splice(index, 1)
        }
    }

    get(key: number): number {
        const [keyNum, index, value] = this.find(key);

        return value;
    }
}