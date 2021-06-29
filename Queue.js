export default class Queue {
    #queue;

    constructor(arr = []) {
        this.#queue = arr;
    }

    // Add item to queue
    enqueue(value) {
        this.#queue = [value].concat(this.#queue);
        return this.#queue;
    }

    // Remove item from queue
    dequeue() {
        if (this.isEmpty) { throw new Error("Can't remove from empty queue") };
        return this.#queue.pop();
    }

    // Clean queue
    clean() {
        this.#queue = [];
    }

    get front() {
        return this.#queue.slice().reverse()[0];
    }

    // Informs if the queue is empty
    get isEmpty() {
        return this.#queue.length === 0;
    }

    // Return the queue
    get value() {
        return this.#queue.slice().reverse();
    }

    // Return the queue's size
    get size() {
        return this.#queue.length;
    }
}