//Additional exercises to practice functions

//1. Create a function named "calculate" that takes three parameters: 
//two numbers and a string representing an arithmetic operation (+, -, *, /). 
//The function should perform the specified operation on the two numbers and return the result.

//fucntion signature:
function calcuate(num1, num2, operator) {
   //#1let answer;
    if (operator == "+") {
      //#2let sum = return num1 + num2
        //#2return sum;
        return num1 + num2;
    } 
    
    else if (operator == "-") {
        return num1 + num2;
    } 
    
    else if (operator == "*") {
        return num1 + num2;
    } 
    
    else if (operator == "/") {
        return num1 + num2;   
        }
    }
    //#1return answer;
    






//Test: Uncomment the following four lines before running your code. Verify the results.
// console.log(calculate(10, 5, '+') == 15) //true
// console.log(calculate(100, 4, '/') == 20) //false
// console.log(calculate(-5, -10, '-') == 5) //true
// console.log(calculate(5, 0, "*") == 5) //false