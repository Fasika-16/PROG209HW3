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
                alert("WARNING! You didn't add a movie ");
        }
        
        document.getElementById('title').value="";
        document.getElementById('rating').value="";
        document.getElementById('year').value="";

        movies.sort((a,b) => {
                return b.rating - a.rating;
        });
}

function showMovies(){
        let htmlText = "Movies: <ul>";
        for(let i=0;i<movies.length;i++){
                htmlText += "<li>"+movies[i].toString()+"</li>";
        }
        htmlText += "</ul>";
        document.getElementById('display').innerHTML = htmlText;
}