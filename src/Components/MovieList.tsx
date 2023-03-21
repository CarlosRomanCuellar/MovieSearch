import Movie from "./Movie";
import MovieObj from "../models/movie";

const MovieList: React.FC<{list: null | MovieObj[]}> = (props) => {
  const movieList = props.list

  if(movieList === null){
    return <h2>Welcome, please search for a movie</h2>
  }

  else return (
    <ul className="movie-list">
      {movieList.map((movie) => ( 
        <li key={movie.imdbID}><Movie
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        ></Movie>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
