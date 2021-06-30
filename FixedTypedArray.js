export default class FixedTypedArray {
    #acceptedType;
    #array;

    constructor(type, size) {
        this.#acceptedType = type;
        this.#array = new Array(size).fill(null);
    }

    // Check if input is a primitive value
    #isPrimitive(value) {
        return value !== Object(value); 
    }

    // Instantiate input if is a primitive value
    #instantiatePrimitive(type, value) {
        const typeOf = {
            number: new Number(value),
            string: new String(value),
            boolean: new Boolean(value)
        }

        return typeOf[type];
    }

    // Print all the array elements one by one.
    traverse() {
        this.#array.forEach((element, i) => console.log(`Indice ${i}: ${element}`));
    }
    // Adds an element at the given index.
    insert({ elements, index }) {
        if (elements === undefined || index === undefined) throw new Error('Missing parameters');
        if ((typeof index !== 'number')) throw new Error('index must be a number');
        if (index < 0 || index > this.size - 1) throw new Error('index must be a number between 0 and array lenght');

        let instancedElement;
        const isPrimitive = this.#isPrimitive(element);
        if (isPrimitive) {
            instancedElement = this.#instantiatePrimitive(typeof element, element);
        } else {
            instancedElement = element;
        }
        if (!(instancedElement instanceof this.type)) throw new Error(`Unexpected type, expecting ${this.type.name}`);
        if (index > (this.size - 1)) throw new RangeError(`Index ${index} is out of bounds`);
        const removedElement = this.#array[index];
        this.#array[index] = instancedElement;
        return { [`removedElementAtIndex${index}`]: removedElement, newArray: this.#array };
    }

    // Deletes an element at the given index.
    delete(index) {
        if (index === undefined) throw new Error('Missing parameter');
        if ((typeof index !== 'number')) throw new Error('index must be a number');
        if (index < 0 || index > this.size - 1) throw new Error('index must be a number between 0 and array lenght');
        const removedElement = this.#array[index];
        this.#array[index] = null;
        return { removedElement, newArray: this.#array };
    }

    // Search by index
    searchByIndex(index) {
        if (index === undefined) throw new Error('Missing parameters');
        if ((typeof index !== 'number')) throw new Error('index must be a number');
        if (index < 0 || index > this.size - 1) throw new Error('index must be a number between 0 and array lenght');
        return this.#array[index];
    }

    // Search by value
    searchByValue() {

    }




    get type() {
        return this.#acceptedType;
    }
    get size() {
        return this.#array.length;
    }
}