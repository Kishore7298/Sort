import { Number } from './Number';
import { Charecters } from './Charecters';
import { LinkedList } from './LinkedList';

let number = new Number([5, 4, 3, 2, 1]);
let charecter = new Charecters('kishore');
let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);

console.log(
  '---------------------------number sorting----------------------------------'
);
console.log('Before: ', number.data);
number.sort();
console.log();
console.log('After: ', number.data);
console.log(
  '---------------------------------------------------------------------------'
);

console.log(
  '--------------------------charecter sorting--------------------------------'
);
console.log('Before: ', charecter.data);
charecter.sort();
console.log();
console.log('After: ', charecter.data);
console.log(
  '---------------------------------------------------------------------------'
);

console.log(
  '-------------------------linked list---------------------------------------'
);
console.log('Before: ');
linkedList.print();
console.log();
console.log('After: ');
linkedList.print();
console.log(
  '---------------------------------------------------------------------------'
);
