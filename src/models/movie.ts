class Movie {
    imdbID: string;
    Title: string; 
    Year: number;
    Poster: string;
    
    constructor( movieID: string, mTitle: string, myear: number, mposter: string ){
        this.imdbID = movieID;
        this.Title = mTitle;
        this.Year = myear;
        this.Poster = mposter
    }
}

export default Movie