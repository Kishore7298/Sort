import { Number } from './Number';
import { Sorter } from './Sorter';

let number = new Number([5, 4, 3, 2, 1]);
let sorter = new Sorter(number);
sorter.sort();
console.log(number.collection);
