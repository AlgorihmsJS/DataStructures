/* It creates a class called Vector. */
class Vector {
    constructor(vectorA, vectorB) {
        this.vectorA = vectorA;
        this.vectorB = vectorB;
        this.vectors = [vectorA, vectorB || null];
    }
}

class Node {
    constructor(node) {
        this.node = node;
        this.children = [];
    }

    createChild(child){
        this.children.push(child);
    }

    removeChild(child){
        this.children.splice(this.children.indexOf(child), 1);
    }
}

// TODO: DataView return the json object with the data
/* The DataView class is a wrapper for the data object that provides a list of the data and the size of
the data. */
class DataViewEdge {
    constructor(data){
        this.data = data;
        this.dataList = [];
    }

    field(field){
        this.dataList.push(field);
        return this.dataList[this.dataList.length - 1];
    }

    index(int){
        
    }

    /**
     * It returns a stringified version of the data array.
     * @returns The dataList getter is returning a stringified version of the data array.
     */
    get dataList(){
        return JSON.stringify(this.data);
    }

    /**
     * `size` is a getter function that returns the size of the `data` object.
     * 
     * The `size` function is a getter function because it uses the `get` keyword. 
     * 
     * The `size` function returns the size of the `data` object because it uses the `JSON.stringify`
     * function to convert the `data` object to a string and then uses the `length` property to get the
     * length of the string.
     * 
     * The `size` function is a getter function because it uses the `get` keyword. 
     * 
     * The `size` function returns the size of the `data` object because it uses the `JSON.stringify`
     * function to convert the `data` object to a string and then uses the `length` property to get the
     * length of the string.
     * 
     * The `size` function is a getter function because it uses the
     * @returns The size of the data object.
     */
    get size(){
        return JSON.stringify(this.data).length;
    }
}

class Edge {
    constructor(node, data){
        this.node = node;
        this.data = data;
        this.dataView = new DataViewEdge(this.data);
    }
}


class Graph {
    constructor(){
        this.edgeList = [];
    }

    addEdge(node, data){
        this.node = node;
        this.data = data;
        this.dataView = new DataViewEdge(this.data);
        return this.edgeList.push(new Edge(node, data));
    }

    /**
     * The above function is a getter function. It returns the value of the variable edgeList.
     * @returns The edgeList property of the current object.
     */
    get edgeList(){
        return this.edgeList;
    }
}

let edge = new Edge();
let graph = new Graph();
let dataView = new DataViewEdge();

let field1 = dataView.field({ name: 'Ed', age: 16 });

graph.addEdge();