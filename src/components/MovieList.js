// IMPORTS
import React from 'react';
import MovieListEntry from './MovieListEntry.js';

// COMPONENT
var MovieList = ({movies, handleWatchedStatus}) => (
  <div className="movie-list">
    {movies.map(movie =>
      <MovieListEntry movie={movie} handleWatchedStatus={handleWatchedStatus} />
    )}
  </div>
);

// // BOUNDARIES
// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// };

// EXPORTS
export default MovieList;