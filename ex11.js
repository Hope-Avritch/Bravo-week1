//Exercise11

//strings are IMMUTABLE = (IM= cannot) (Mutable=mutate)

let myName = "hope"

//myName[0] = "H";

console.log(myName):

//arrays are Mutable
const colors = ["red", "blue", "green", "purple", "yellow"];

colors[2] = "black";

console.log("1", colors);

//colors = {"white", "brown", "black"};
//create an error because trying to create a new array
console.log("1", colors);

let colorSlice = colors.slice(2, 5);
console.log = new color //?