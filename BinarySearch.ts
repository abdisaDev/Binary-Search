class Stack {
  private stack: Array<number> = [];
  private stackLength: number = this.stack.length - 1;

  binarySearch(stack: Array<number>, input: number): string {
    let array: Array<number> = this.sortStack(stack);
    let mid = Math.floor(array.length / 2);
    console.log(array[mid], " == ", input);
    if (array[mid] === input) {
      return `${input} found at index mid: ${mid}`;
    } else if (array[mid] < input && array.length > 1) {
      let leftElements = array.splice(mid, Number.MAX_VALUE);
      this.binarySearch(leftElements, input);
    } else if (array[mid] > input && array.length > 1) {
      let rightElements = array.splice(0, mid);
      console.log(rightElements, "2");
      this.binarySearch(rightElements, input);
    }
    return `${input} Not found`;
  }

  push(input: number) {
    this.stack[this.stackLength - 1] = input;
  }

  set setStack(array: Array<number>) {
    for (let i = 0; i < array.length; i++) {
      this.stack[i] = array[i];
    }
  }

  get getStack() {
    return this.stack;
  }

  private sortStack(array: Array<number>): Array<number> {
    let swap: number;

    try {
      if (array.length === 0) {
        throw new Error(`Stack is Empty`);
      }
    } catch (err) {
      console.error(err);
    }

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          swap = array[i];
          array[i] = array[j];
          array[j] = swap;
        }
      }
    }
    return array;
  }
}

let stack = new Stack();
stack.setStack = [1, 4, 5, 2, 3];
console.log(stack.binarySearch([1, 4, 5, 2, 3], 2));
class Main {}
