// Copyright (2022)
// Author: E5war5IT (GitHub)

// Queue
class Queue {
    /**
     * The constructor function is a function that is called when a new instance of the class is created.
     * @param items - An Queue of items to be added to the collection.
    */
    constructor(items){
        this.items = items;
        this.current = 0;
    }
    
    /**
     * If the current item is the last item in the Queue, return null, otherwise return the next item in
     * the Queue.
     * @returns The next item in the Queue.
    */
    next(){
        this.current += 1;
        return this.current === this.items.length-1 ? null : this.items[this.current];
    }
    
    /**
     * The function takes an item as an argument and pushes it to the items Queue.
     * @param item - The item to add to the end of the Queue.
    */
    set(item){
        this.items.unshift(item);
    }
        
    /**
     * If the index is the last item in the Queue, return null, otherwise, if the index is the first item
     * in the Queue, return the first item in the Queue, otherwise, return the item at the index plus one.
     * @param index - The index of the item you want to get the next item of.
     * @returns The next item in the Queue.
    */
    get(index){
        if (typeof index !== 'number') throw new Error('Invalid index');
        return index === this.items.length - 1 ? null : index === 1 ? this.items[0] : this.items[index + 1];
    }
    
    /**
     * Head() returns the first item in the items Queue.
     * @returns The first item in the Queue.
    */
    head(){
        return this.items[0];
    }
    
    /**
     * "For each item in the items Queue, remove the last item from the Queue."
     * 
     * The for loop is a bit more complicated than the forEach loop. It has three parts:
     * 
     * 1. The first part is the initialization. This is where we declare the variable idx and set it to 0.
     * 2. The second part is the condition. This is where we check to see if the idx variable is less than
     * the length of the items Queue.
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

    /**
     * The size function returns the length of the items Queue.
     * @returns The length of the items Queue.
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