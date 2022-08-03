const greet = () => {
  const prefix = "Mr";
  return (name) => {
    console.log(`${prefix} ${name} ,welcome!`);
  };
};
console.log(greet()("jack"));

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

var z =mx()
console.log(z) // [function:y]
z()


function Counter(){
    var count = 0
    this.incrementCount = function(){
        count++
        console.log(count)
    }
}

console.log(count) // Error :count is not defined
var adder = new Counter()
adder.incrementCount()//1