// Q8: Write a function (getEvenAndSort) that can be called on any array, and it returns the subarray of only the even numbers

export {};
let j: number;
let n: number;
let a: number;
let i: number;

let getEvenAndSort = (numbers: number[]): number[] => {
  const arrayLength = numbers.length;
  let array: number[] = numbers.filter((x) => x % 2 === 0);

  for (i = 0; i < arrayLength; ++i) {
    for (j = i + 1; j < arrayLength; ++j) {
      if (array[i] > array[j]) {
        a = array[i];
        array[i] = array[j];
        array[j] = a;
      }
    }
  }

  return array;
};

console.log(getEvenAndSort([10,18,5,6,2,9]));