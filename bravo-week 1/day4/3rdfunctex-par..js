// //palindrome, the same back and forth, taco cat, racecar 


// function reverseString(myString, presCap) {
//     if (!presCap) {
//       //if (presCap == true)
//       myString = myString.toLowerCase(); //converts string to lowercase and resaves as myString
//     //"} else {
//       //??? " //only have one behavoir to happen in one case, no else is needed
//     }
   
//     let reversedString = "";  //'arcs'
  
  
//   //with loops often helpful to think about the middle step rather than the first or last steps
//     for (let i = 0; i < myString.length; i++) {
//       let letter = myString.charAt(i);
//       reversedString = letter + reversedString; //"b" + "arcs" -> "barcs"
//       //revesedString  = myString.chartAt(i) + reversedString; //could be done with one line
//       }
  
//     return reversedString;
  
//   } 


// //3. Write a function named "isPalindrome" that takes a string as input 
// //and returns true if the string is a palindrome (reads the same forwards and backwards), 
// //and false otherwise. You can assume your string will only contain letters and spaces.
// //You can ignore capitalization (e.g. "Racecar" should be considered a palindrome)
// //and also ignore spaces (e.g. "taco cat" should be considered a palindrome).
// //Consider how your reverseString function above can be used!

// //funtion signature

// function isPalindrome(myString) {  //madam, hello
//   //create a variable to store the result of calling reverseString on myString
//   //pass in false to reverseString because we dont want to care about capitalization
  
//   //clean myString by replacing all spaces with empty string and convering it to lowercase
//   myString = myString.replaceAll(" ","").toLowerCase();
  
//   let myStringReverse = reverseString(myString, false);  //madam, hello   
//     //check if reversed string is equal to original
//     //smallest words if (myStringReverse == myString) {
//    // "if (myStringReverse == myString.toLowerCase()) { "//changed for if variable is capitalized
       
//    //(put .toLowerCase to above cleaning for order, what needs to happen first)
//     if (myStringReverse == myString) {
//       //is so, return true
//     return true;
//     } else {
//     return false;
//     }
// }

// function isPalindrome(myString) {  //madam, hello
//   //create a variable to store the result of calling reverseString on myString
//   //pass in false to reverseString because we dont want to care about capitalization
  
//   //clean myString by replacing all spaces with empty string and convering it to lowercase
//   myString = myString.replaceAll(" ","").toLowerCase();
  
//   let myStringReverse = reverseString(myString, false);  //madam, hello   
//     //check if reversed string is equal to original
//     //smallest words if (myStringReverse == myString) {
//    // "if (myStringReverse == myString.toLowerCase()) { "//changed for if variable is capitalized
       
//    //(put .toLowerCase to above cleaning for order, what needs to happen first)
//     if (myStringReverse == myString) {
//       //is so, return true
//     return true;
//     //} else {  //can remove to simplify
//     return false;
//     }
// }



//**Preferred way
 
// function isPalindrome(myString) {  //madam, hello
//     //create a variable to store the result of calling reverseString on myString
//     //pass in false to reverseString because we dont want to care about capitalization
    
//     //clean myString by replacing all spaces with empty string and convering it to lowercase
//     myString = myString.replaceAll(" ","").toLowerCase();
    
//     let myStringReverse = reverseString(myString, false);  //madam, hello   
//       //check if reversed string is equal to original
//       //smallest words if (myStringReverse == myString) {
//      // "if (myStringReverse == myString.toLowerCase()) { "//changed for if variable is capitalized
         
//      //(put .toLowerCase to above cleaning for order, what needs to happen first)
     
//      //return whether or not myStringReverse equals myString
//      return (myStringReverse = myString);
//   }

// //Test: Uncomment the following four lines before running your code. Verify the results.
// console.log(isPalindrome("Racecar") == true); //true
// console.log(isPalindrome("madam") == true); //true
// console.log(isPalindrome("hello") == false); //true
// console.log(isPalindrome("A man a plan a canal Panama") == true); //true
// console.log(isPalindrome("T  a  CO  Ca  t") == true); //true


//shortest form:
function isPalindrome(myString) {  //madam, hello
    
    
     return (reverseString(myString.replaceAll(" ","").toLowerCase(), false = myString.replaceAll(" ","").toLowerCase()));


  }

//Test: Uncomment the following four lines before running your code. Verify the results.
console.log(isPalindrome("Racecar") == true); //true
console.log(isPalindrome("madam") == true); //true
console.log(isPalindrome("hello") == false); //true
console.log(isPalindrome("A man a plan a canal Panama") == true); //true
console.log(isPalindrome("T  a  CO  Ca  t") == true); //true




