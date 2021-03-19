// Only change code below this line
function myCounter(n) {
  if (n === 1) return [n];
  else {
    var numbers = myCounter(n - 1);
    numbers.push(n);
    return numbers;
  }
}
// Only change code above this line

console.log(myCounter(5)); // Change this line
module.exports = myCounter;
