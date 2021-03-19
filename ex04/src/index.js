// Only change code below this line
function sumFibonacci(num) {
  if (num <= 0) return 0;
  var sum = 0;
  var niz = [];
  niz[0] = 1;
  niz[1] = 1;
  for (var i = 2; i < num; i++) {
    niz.push(niz[i - 1] + niz[i - 2]);
  }
  for (var i = 0; i < num; i++) {
    if (niz[i] % 2 !== 0 && niz[i] <= num) {
      sum += niz[i];
    }
  }
  return sum;
}
// Only change code above this line

console.log(sumFibonacci(20)); // Change this line
module.exports = sumFibonacci;
