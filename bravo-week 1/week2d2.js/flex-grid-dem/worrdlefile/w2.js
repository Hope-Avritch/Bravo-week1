//G = green, y = yellow, x = grey


let word1 = "apple";
let guess1 = "apply";

//console.log("GGGGX");
//compare two words to each other
//console.log a string representing which letters match

let word2 = "plays";
let guess2 = "ponds";

//console.log("GXXXG")

let word3 = "ducks";
let guess3 = "cakes";

//console.log("YXYXG")


function checkGuess(secretWord, guess) {
    //create a variable to build our result string in
    let results = "";
    //loop through each letter of the guess
    for (let i = 0; i< guess.length; i++) { 
        //check if letter is in secret word
        if (secretWord.includes(guess[i])) { 
            //if so, check if letter are in the same position
            if (secretWord[i] == guess[i]) {
                //if so, add "G" to my result string   
                results += "G" 
            }
            else {
                //if not, add "Y" to results string
                results += "Y"
            }
        }  
                                                                
        else {
            //if not, add "X" to results string
            results += "X"
        }
    }
   //return the result string
    return results;
}
    let myResult = checkGuess(word1, guess1)
    console.log(myResult)
    
   

checkGuess(word1, guess1)
//"GGGGX"

checkGuess(word2, guess2)
//"GXXXG"

checkGuess(word3, guess3)
//"YXYXG"
