//slicing
let myName = "Hope Avritch"
//first 3 letters

//start at 0, stop just before 3
let firstLetter = myName.slice(0, 3);

console.log(firstLetter);

//you dont have to give it an end
//if you only give it one value, it will assume that is the start
//and then automatically go to the end

let mySlice = myName.slice(6);

console.log(mySlice);


//.indexOf(sting)
//where is the A in my name?
let indexoff = myName.indexof("a")
//case sentitive.

let indexoff = myName.indexof("A")

