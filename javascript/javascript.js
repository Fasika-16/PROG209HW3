function movie(title, rating){

    this.title = title;
    this.rating = rating;
    this.validate = function(){
            var num_rat = parseInt(this.rating);
            
            if(title && (num_rat>=1 && num_rat<=5)){
                    return true;
            }
            else{ 
                    return false;
            }
    }
    this.toString = function(){
            return "Movie: "+this.title+", Rating: "+this.rating;
    }
}
var movies = [];
function addMovie(){
        var title = document.getElementById('title').value;
        var rating = document.getElementById('rating').value;
        var newMovie = new movie(title, rating);
        if(newMovie.validate()){
                
                movies.push(newMovie);
        }
        else{
                
                alert("WARNING! You didn't add movie ");
        }
        
        document.getElementById('title').value="";
        document.getElementById('rating').value="";
}

function showMovies(){
        var htmlText = "movies: <ul>";
        for(var i=0;i<movies.length;i++){
                htmlText += "<li>"+movies[i].toString()+"</li>";
        }
    
        htmlText += "</ul>";
        document.getElementById('display').innerHTML = htmlText;
}