// //objects in javascript are data structures that allow you to storr
// //information in key-value pairs (dictionary = object in python)
// //word = key, value that it matches with  (ie contacts in cell phone
// //key values are in notation???

// //example objects; contacts

// let contacts = {
// //key  :   value,
// "John" : "555-1234",
// "Susie" : "234-0098",
// "Mark" : "245-3323",

// }
// console.log(contacts);

// //look things up in objects

// //look up Mark's number and store as a seperate variable

// let marskNumber = contact ["Mark"];

// //console.log(marsknumber);

// //add things to the object
// //Mary's number is 456-0987. Add her to the contacts object
// contacts["Mary"] =  "456-0987";

// //oops, Mary gave you the wrong number. the right one is actually 456-0988
// //update her number is the conctacts ojbect
// contacts["Mary"] = "456-0988"

// //console.log(contacts);


//Suppose you have a terrible business idea and decide to open a video renatal store
//Create a movie object that stores the following properties for the movie:
//title, release year, rating, numCopies

const movie1 = {
    title : "Barbie",
    releaseYear : "2023",
    rating : "PG-13",
    numCopies : 3
}


const movie2 = {
    title : "Jurrasic Park",
    releaseYear : "2003",
    rating : "PG-13",
    numCopies : 2
}

const movie3 = {
    title: "The Lion King",
    releaseYear: "1994",
    rating : "G",
    numCopies : 5
}

let inventory = [movie1, movie2, movie3];

// //write a function that lets people check out a movie by giving its title
// //when someone checks out: need to find movie and decrease the number of copies by 1 and return
function rentMovie(title){
    //loop through the movies in the inventory
    for (let movie of inventory) {
    //if the movie's title equals the title parameter passed in
    if (movie.title.toLowerCase() == title.toLowerCase()) {
       //check, if any copies are available
    if (movie.numCopies > 0){

  
        //decrease the movie's copies by 1 and return
        movie.numCopies--;
        console.log("Great, here's your movie! Pleaes return in 15 minutes.");
        return;
    }else{
        console.log("All copies are rented currently.")
        return;
    }
    
    //if not, say we are out and return
    // console.log("Sorry all copies are rented currently");
    // return;    
    }
  }

  //if loop finishes without ever returning, that means we don't have the movie
  console.log("Sorry we don't have this movie.");
}

//function calls
rentMovie("The Lion King");
rentMovie("The Lord of the Rings");
rentMovie("The lion King");
rentMovie("the lion king");
rentMovie("Barbie");
rentMovie("The lion King");
rentMovie("The lion King");
rentMovie("The lion King");


// function rentMovie(title) {

// }
// console.log(movie1);

// //print out a statement summarizing the movie infor
// //Eg. "Barbie was released in 2023 and has a PG-13 rating. We have 3 copies."

// let summary1 = `${movie1.title} was released in ${movie1releaseYear} and has a ${movie1.rating} rating.` +
//                  `We have ${movie1.numCopies} copies.`



// console.log(summary1);

