// Only change code below this line
function rangeOfNumbers(startN, endN) {
  if (endN < startN)
    return "The starting number will always be less than or equal to the ending number";
  if (startN === endN) {
    return [startN];
  } else {
    var numbers = rangeOfNumbers(startN, endN - 1);
    numbers.push(endN);
    return numbers;
  }
}
// Only change code above this line

console.log(rangeOfNumbers(7, 15)); // Change this line
module.exports = rangeOfNumbers;
