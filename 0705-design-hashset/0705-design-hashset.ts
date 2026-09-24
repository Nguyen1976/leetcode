class MyHashSet {
    // An array of prime numbers used to determine the size of the internal array
    primes = [53, 97, 193, 389, 769, 1543, 3079, 6151, 12289, 24593, 49157, 98317, 196613, 393241, 786433, 1572869]
    
    // The current size of the hash set (number of elements)
    size = 0;

    // The index used to access the prime number for the current internal array
    i = 0;

    // The internal array representing the hash set, initialized with undefined values
    arr = Array(this.primes[this.i]).fill(undefined);

    constructor() {
        // The constructor is empty as initialization is already done above.
    }

    // Adds a key to the hash set
    add(key: number): void {
        let hashKey = this.hash(key);
        let firstNegOne = -1;

        // While the current position in the internal array is occupied and not the key we're looking for
        // Keep probing for the next available position using linear probing
        while(this.arr[hashKey] !== undefined && this.arr[hashKey] !== key){
            // Keep track of the first position with value -1 (previously removed element)
            if(this.arr[hashKey] === -1 && firstNegOne === -1){
                firstNegOne = hashKey;
            }
            hashKey = (hashKey + 1) % this.primes[this.i];
        }

        // If a position with value -1 was found, use it for the new key
        // Otherwise, if the position is still undefined, store the new key there
        if(this.arr[hashKey] === undefined && firstNegOne !== -1){
            this.size++;
            this.arr[firstNegOne] = key;
        } else if(this.arr[hashKey] === undefined){
            this.size++;
            this.arr[hashKey] = key;
        }

        // Check if the hash set has exceeded the load factor (75%)
        // If so, trigger a rehash to increase the internal array size and reduce collisions
        if((this.size / this.primes[this.i]) * 100 >= 75){
            this.rehash();
        }
    }

    remove(key: number): void {
        let hashKey = this.hash(key);

        while(this.arr[hashKey] !== undefined && this.arr[hashKey] !== key){
            hashKey = (hashKey + 1) % this.primes[this.i];
        }

        if(this.arr[hashKey] === key){
            this.size--;
            this.arr[hashKey] = -1;
        }
    }

    contains(key: number): boolean {
        let hashKey = this.hash(key);

        while(this.arr[hashKey] !== undefined && this.arr[hashKey] !== key){
            hashKey = (hashKey + 1) % this.primes[this.i];
        }

        return this.arr[hashKey] !== undefined ? true : false;
    }

    rehash(): void{
        this.i++;
        
        let oldArray = this.arr;
        this.arr = Array(this.primes[this.i]).fill(undefined);
        this.size = 0;

        for(let i = 0; i < oldArray.length; i++){
            if(oldArray[i] !== undefined && oldArray[i] !== -1){
                this.add(oldArray[i]);
            }
        }
    }

    hash(key: number): number{
        return key % this.primes[this.i];
    }

}