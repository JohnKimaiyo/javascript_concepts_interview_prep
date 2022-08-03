// return a new array where even numbers are multiplied by 2

let arr = [1, 2, 3, 4, 5, 6, 7];

function consoleEven(arr) {
  let data = arr.map((num) => (num % 2 == 0 ? num * 2 : num * 1));
  console.log(data); //[1,4,3,8,5,12,17]
}

consoleEven(arr);

function consoleEven(arr) {
  let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1));
  console.log(data);
}

console(arr);

// convert the new array back to original

function consoleEven(arr) {
  let data = arr
    .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
    .map((item) => (item % 2 === 0 ? item / 2 : item / 1));
  console.log(data);
}

console.log(arr)
