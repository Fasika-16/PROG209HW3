
let movies = [];
function addMovie(){
        let title = document.getElementById('title').value;
        let rating = document.getElementById('rating').value;
        let year = document.getElementById('year').value;
        let newMovie = new movie(title, rating, year);
        if(newMovie.validate()){
                
                movies.push(newMovie);
        }
        else{
                
                alert("WARNING! You didn't add movie ");
        }
        
        document.getElementById('title').value="";
        document.getElementById('rating').value="";
        document.getElementById('year').value="";
        movies.sort((a,b) => {
                return parseFloat(b.rating) - parseFloat(a.rating);
        });
}

function showMovies(){
        let htmlText = "movies: <ul>";
        for(var i=0;i<movies.length;i++){
                htmlText += "<li>"+movies[i].toString()+"</li>";
        }
        htmlText += "</ul>";
        document.getElementById('display').innerHTML = htmlText;

        
}





// function newMovie() {
//     let movie = new movie(
//         document.getElementById("title").value,
//         document.getElementById("rating").value,
//     );
//     if (!movie.isValid()) {
//         alert("Invalid data input. Please enter the correct data.");
//     }
//      else {
//         movie.push(movie); 
//         // displayMovie();
//     }
//     //Removes anything in the entry boxes
//     document.getElementById("title").value = "";
//     document.getElementById("rating").value = "";
// };

// let movies = [];

// let displayMovie = function(){
//     let  = "";

// }

