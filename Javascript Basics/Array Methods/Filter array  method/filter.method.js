const words = ["react", "script", "interview", "style", "javascript"];

const ans = words.filter((word) => word.length > 6);

console.log(ans); // ['interview','javascript]

let newArr = [];

for (let i = 0; i < words.length; i++) {
  if (word[i].length > 6) {
    newArr.push(word[i]);
  }
}

console.log(newArr);
