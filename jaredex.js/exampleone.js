//Write a function called calculateSum that takes an array of numbers as input and
//returns the sum of all the numbers in the array.

console.log(calculateSum([1, 2, 3, 4, 5])); // Output should be 15
console.log(calculateSum([10, 20, 30])); // Output should be 60
console.log(calculateSum([-1, 0, 1])); // Output should be 0

function calculateSum(numbers) {
    let sum = 0;
     
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
  
    return sum;
  }