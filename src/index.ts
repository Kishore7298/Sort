import { Number } from './Number';
import { Charecters } from './Charecters';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

let number = new Number([5, 4, 3, 2, 1]);
let charecter = new Charecters('kishore');
let sorter = new Sorter(number);
sorter.sort();
console.log(number.data);
let charecterSort = new Sorter(charecter);
charecterSort.sort();
console.log(charecter.data);
let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
let linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
