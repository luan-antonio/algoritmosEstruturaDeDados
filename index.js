import BaseConverter from './BaseConverter.js';
import Queue from './Queue.js';
import FixedTypedArray from './FixedTypedArray.js';

const convertedDec = BaseConverter.convertFromDec(123, 16);

const arr = new FixedTypedArray(Boolean, 2);
arr.insert({ element: false, index: 0 })
arr.insert({ element: true, index: 1 })
arr.delete(1)
arr.traverse();


