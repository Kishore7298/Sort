class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    // implementing the bubble sort here.
    let { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          let temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}

let sorter = new Sorter([10, 2, -1, 0]);
sorter.sort();
console.log(sorter.collection);
