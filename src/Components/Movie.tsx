import React from "react";

const Movie: React.FC<{ title: string; poster: string; year: number }> = (
  props
) => {
  return (
    <div className="movie">
      <h2 className="movie-title">{props.title}</h2>
      <img
        className="movie-poster"
        src={
          props.poster
            ? props.poster
            : "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
        }
        alt="movie poster"
      ></img>
      <h4 className="movie-year">{props.year}</h4>
    </div>
  );
};

export default Movie;
