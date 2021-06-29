import Stack from "./Stack.js";

export default class BaseConverter {
    static convertFromDec(decimalNumber, base) {
        const stack = new Stack();
        const digits = '0123456789ABCDEF';
        let binaryString = '';

        while (decimalNumber > 0) {
            stack.push(Math.floor(decimalNumber % base));
            decimalNumber = Math.floor(decimalNumber / base);
        }

        while (!stack.isEmpty) {
            binaryString += digits[stack.pop().toString()];
        }

        return binaryString;
    }
}