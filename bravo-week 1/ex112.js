//array methods
let days = ["Mon", "Tues", "Wed", "Thu", "Fri" ]
days.pop()  //remove the last item in the array
days.push("Sat"); //adds to the end of the array
days.shift(); //remove the first item in the array
days.unshift("Sun"); //adds item to front of array 

//method = type of function


let grades = [99, 43, 87, 21, 94];
let grade = grades.pop();

if(grade >= 60) {
    console.log("PASS");
} else {
    console.log("FAIL");
}

console.log(grades);


//console.log(days);