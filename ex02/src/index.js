// Only change code below this line
    function myCounter(n) {
        if(n < 1)
        return [];
        else{
            const countArray = myCounter(n-1);
            countArray.push(n);
            return countArray;
        }
    }
// Only change code above this line

console.log(myCounter(5)); // Change this line
module.exports = myCounter;
