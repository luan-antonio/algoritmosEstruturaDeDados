export default class Stack {
    #stack

    constructor(arr = []) {
        this.#stack = arr;
    }

    // Add item to stack
    stackUp(itemToPush) {
        return this.#stack.push(itemToPush);
    }

    // Remove item from stack
    unstack() {
        if (this.isEmpty) { throw new Error("Can't remove from empty stack") };
        return this.#stack.pop();
    }

    // Clean the stack
    clean() {
        this.#stack = [];
    }

    // Return the stack's top element
    get peek() {
        return this.#stack[this.#stack.length - 1];
    }

    // Informs if the stack is empty
    get isEmpty() {
        return this.#stack.length === 0;
    }

    // Return the stack
    get value() {
        return this.#stack;
    }

    // Return the stack's size
    get size() {
        return this.#stack.length;
    }
}