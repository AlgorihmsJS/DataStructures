// Copyright (2022)
// Author: E5war5IT (GitHub)

class LinkedList {
    /**
     * The constructor function is a function that is called when a new instance of the class is created.
     * @param items - An LinkedList of items to be added to the collection.
     */
    constructor(items){
        this.items = items;
        this.current = 0;
    }

    /**
     * If the current item is the last item in the LinkedList, return null, otherwise return the next item in
     * the LinkedList.
     * @returns The next item in the LinkedList.
     */
    next(){
        this.current += 1;
        return this.current === this.items.length-1 ? null : this.items[this.current];
    }

    /**
     * The function takes an item as an argument and pushes it to the items LinkedList.
     * @param item - The item to add to the end of the LinkedList.
     */
    set(item){
        this.items.push(item);
    }
    
    /**
     * If the index is the last item in the LinkedList, return null, otherwise, if the index is the first item
     * in the LinkedList, return the first item in the LinkedList, otherwise, return the item at the index plus one.
     * @param index - The index of the item you want to get the next item of.
     * @returns The next item in the LinkedList.
     */
    get(index){
        if (typeof index !== 'number') throw new Error('Invalid index');
        return index === this.items.length - 1 ? null : index === 1 ? this.items[0] : this.items[index + 1];
    }

    /**
     * If the value is in the LinkedList, return true, else return false.
     * @param value - The value to search for within the Set object.
     * @returns The first value that is found in the LinkedList.
     */
    has(value){
        let hasValue = false;
        for (let idx = 0, length = this.items.length; idx < length; idx++) 
        if (this.items[idx] == value) hasValue = true;
        return hasValue;
    }

    /**
     * Head() returns the first item in the items LinkedList.
     * @returns The first item in the LinkedList.
     */
    head(){
        return this.items[0];
    }

    /**
     * "For each item in the items LinkedList, remove the last item from the LinkedList."
     * 
     * The for loop is a bit more complicated than the forEach loop. It has three parts:
     * 
     * 1. The first part is the initialization. This is where we declare the variable idx and set it to 0.
     * 2. The second part is the condition. This is where we check to see if the idx variable is less than
     * the length of the items LinkedList.
     * 3. The third part is the increment. This is where we increment the idx variable by 1
     */
    drop(){
        for (let idx = 0, length = this.items.length; idx < length; idx++) this.items.pop();
    }

    /** removes the first item from the list. */
    dropHead(){
        this.items.shift();
    }

    /** It removes the last item from the list.*/
    dropLast(){
        this.items.pop();
    }

    indexOf(item){
        return this.items.indexOf(item)-1;
    }

    /**
     * The size function returns the length of the items LinkedList.
     * @returns The length of the items LinkedList.
     */
    get size(){
        return this.items.length;
    }

    /**
     * "The *#values() function returns an iterator that yields each item in the collection."
     * 
     * The *#values() function is a generator function. It uses the yield keyword to return each item in
     * the collection.
     */
    *#values(){
        for (const item of this.items) yield item;
    }

    /**
     * The above function is a generator function. It returns an iterator
     * @returns The iterator object.
     */
    [Symbol.iterator](){
        return this.#values();
    }
}

let linkedList = new LinkedList([1, 4, 5, 8]);
console.log(linkedList.size); // 4
console.log(linkedList.indexOf(4)); // 0
console.log(linkedList.head()); // 1
console.log(linkedList.get(2)); // 8
console.log(linkedList.set(4)); // (1, 4, 5, 8, 4)
console.log(linkedList.get(4)); // null
console.log(linkedList.size); // 5
console.log([...linkedList]); // [1, 4, 5, 8, 4]
console.log(linkedList.next()); // 4
console.log(linkedList.dropHead()); // (4, 5, 8, 4)
console.log(linkedList.has(8)); // true
console.log(linkedList.head()); // 4
console.log(linkedList.next()); // 8
console.log(linkedList.next()); // null
console.log(linkedList.drop());
console.log(linkedList.size); // 0


// cd data_structures
// node linkedList.js