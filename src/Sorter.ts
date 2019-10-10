import { Number } from './Number';

export class Sorter {
  constructor(public collection: Number) {}

  sort(): void {
    // implementing the bubble sort here.
    let { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
