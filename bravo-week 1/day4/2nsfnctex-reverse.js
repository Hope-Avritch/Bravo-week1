//2. Create a function named "reverseString" that takes two parameters:
//a string containing only letters and spaces (no punctuation or special characters),
//and a boolean indicating whether or not you should preserve capitalization
//and returns a reversed version of that string

//"Hello" -> "olleH"
//"New York" -> "kroy wen"

//function signature

function reverseString(myString, presCap) {
  if (!presCap) {
    //if (presCap == true)
    myString = myString.toLowerCase(); //converts string to lowercase and resaves as myString
  //"} else {
    //??? " //only have one behavoir to happen in one case, no else is needed
  }
 
  let reversedString = "";  //'arcs'


//with loops often helpful to think about the middle step rather than the first or last steps
  for (let i = 0; i < myString.length; i++) {
    let letter = myString.charAt(i);
    reversedString = letter + reversedString; //"b" + "arcs" -> "barcs"
    //revesedString  = myString.chartAt(i) + reversedString; //could be done with one line
    }

  return reversedString;

} 
/*
original string: XXXXXXXX  (can only look at one at a time)
reversed string : E+L+B+B+A+R+C+S  -> ELBBARCS
*/





//Test: Uncomment the following three lines before running your code. Verify the results.
console.log(reverseString("Alan Turing", true) == "gniruT nalA"); //true
console.log(reverseString("California", false) == "ainrofilac"); //true
console.log(reverseString("Racecar", true) == "racecar"); //false
