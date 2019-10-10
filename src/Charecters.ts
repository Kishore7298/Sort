export class Charecters {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let charecters = this.data.split('');
    let leftHand = charecters[leftIndex];
    charecters[leftIndex] = charecters[rightIndex];
    charecters[rightIndex] = leftHand;
    this.data = charecters.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
}
