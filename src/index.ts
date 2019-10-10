import { Number } from './Number';
import { Charecters } from './Charecters';
import { Sorter } from './Sorter';

let number = new Number([5, 4, 3, 2, 1]);
let charecter = new Charecters('kishore');
let sorter = new Sorter(number);
sorter.sort();
console.log(number.data);
let charecterSort = new Sorter(charecter);
charecterSort.sort();
console.log(charecter.data);
