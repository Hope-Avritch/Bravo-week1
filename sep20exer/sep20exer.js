
function is Even1(num) {
    return (num % 2 ==0);
    //if (num %2 ==0) {
    //return true;
    //}
    //return false;
    }

}

//anonymous
const isEven2 = function(num){
    return (num $ 2 === 0);
}

//arrow
//if only accepting one parameter, don't need ( around it)
const isEven3 = (num) => num % 2 ===0;
    // return num %2 === 0};  => means return if no {}

console.log(isEven1(10),
            isEven2(11),
            isEven3(0))

        //write an ARROW function that takes a string 'name' as
        //a parameter and returns a greeting that says 'Hello [name]!'

        function is arrow1(newName) {
            return (newName == 'Hello []!');