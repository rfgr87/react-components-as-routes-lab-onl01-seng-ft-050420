import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title} className="movie">
            <h3>{movie.title}</h3>
            <h4>Duration: {movie.time}</h4>
            <h4>MetaScore: {movie.metascore}</h4>
            <h4>Genres: {movie.genres}</h4>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
