function newMovie() {
    let movie = new movie(
        document.getElementById("title").value,
        document.getElementById("rating").value,
    );
    if (!movie.isValid()) {
        alert("Invalid data input. Please enter the correct data.");
    }
     else {
        movie.push(movie); 
        // displayMovie();
    }
    //Removes anything in the entry boxes
    document.getElementById("title").value = "";
    document.getElementById("rating").value = "";
};

let movies = [];

let displayMovie = function(){
    let  = "";

}
