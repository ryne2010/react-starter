// IMPORTS
import React from 'react';
import MovieListEntry from './MovieListEntry.js';

// COMPONENT
var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map(movie =>
      <MovieListEntry movie={movie} />
    )}
  </div>
);

// // BOUNDARIES
// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// };

// EXPORTS
export default MovieList;