class Stack {
  binarySearch(stack: Array<number>, input: number): boolean {
    let array: Array<number> = Array.from(new Set(this.sortStack(stack)));
    let mid = Math.floor(array.length / 2);

    if (array[mid] === input) {
      return true;
    } else if (array[mid] < input && array.length > 1) {
      let rightElements = array.splice(mid, Number.MAX_VALUE);
      return this.binarySearch(rightElements, input);
    } else if (array[mid] > input && array.length > 1) {
      let leftElements = array.splice(0, mid);
      return this.binarySearch(leftElements, input);
    } else {
      return false;
    }
  }

  private sortStack(array: Array<number>): Array<number> {
    let swap: number;

    try {
      if (array.length === 0) {
        throw new Error("Stack is Empty");
      } else if (array.length < 1) {
        throw new Error("Stack elements can not be less than 2.");
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

class Main {
  private stackInstance: Stack;
  private stack: Array<number> = [];
  private inputValue: number;

  constructor() {
    this.stackInstance = new Stack();
  }

  set setStack(array: Array<number>) {
    for (let i = 0; i < array.length; i++) {
      this.stack[i] = array[i];
    }
  }

  set input(inputValue: number) {
    this.inputValue = inputValue;
  }

  push(element: number) {
    this.stack[this.stack.length] = element;
    return this.stack;
  }

  get searchResult() {
    const index = `${this.stack.findIndex(
      (element) => this.inputValue === element
    )}`;

    return this.stackInstance.binarySearch(this.stack, this.inputValue)
      ? `${this.inputValue} found at index: ${index}!`
      : `${this.inputValue} Not found!`;
  }
}

const bs = new Main();

bs.setStack = [1, 4, 6, 8, 2, 6, 0];
bs.push(7);
bs.input = 9;
console.log(bs.searchResult);
