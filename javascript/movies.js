function movie(title, rating, year){

    this.title = title;
    this.rating = rating;
    this.year = year;
    
    this.validate = function(){
            let num_rat = parseInt(this.rating);
            
            if(title && (num_rat>=1 && num_rat<=5)){
                    return true;
            }
            else{ 
                    return false;
            }
    }
    
    this.toString = function(){
            return "Movie: "+this.title+", Rating: "+this.rating+", Year: "+this.year;
    }
    
}



