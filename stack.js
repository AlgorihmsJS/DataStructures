// Copyright (2022)
// Author: E5war5IT (GitHub)

class Stack {
    constructor(items) {
        this.items = items;
    }

    /**
     * The push() method adds a new item to the end of an array.
     * @param item - The item to be pushed into the stack.
     */
    push(item) {
        this.items.push(item);
    }

    /**
     * The pop() function removes the last element from the array and returns it.
     * @returns The last element of the array.
     */
    pop() {
        if (this.items.length == 0) return "Underflow";
       return this.items.pop();
    }

    /**
     * The startPush function takes an item as an argument and adds it to the beginning of the items array.
     * @param item - The item to be pushed into the array.
     */
    startPush(item){
        this.items.unshift(item);
    }

    /**
     * The peek() function returns the last element of the array
     * @returns The last item in the array.
     */
    peek(){
        return this.items[this.items.length  - 1];
    }

    /**
     * The function isEmpty() returns true if the length of the items array is equal to 0.
     * @returns The length of the items array.
     */
    isEmpty(){
        return this.items.length === 0;
    }

    /**
     * Return the index of the first occurrence of the item in the array, or -1 if the item is not found.
     * @param item - The item to search for.
     * @returns The index of the item in the array.
     */
    indexOf(item){
        for (let index = 0; index < this.items.length; index++) if(this.items[index] == item) return index;
    }
}