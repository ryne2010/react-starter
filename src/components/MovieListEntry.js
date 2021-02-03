// IMPORTS
import React from 'react';

// COMPONENT
var MovieListEntry = (props) => (
  <div className="movie-list-entry">
    <div className="movie-list-entry-body">
      <div className="movie-list-entry-title">{props.movie.title}</div>
      <div className="movie-list-entry-detail"></div>
    </div>
  </div>
);

// // BOUNDARIES
// MovieListEntry.propTypes = {
//   movie: PropTypes.object.isRequired
// }

// EXPORTS
export default MovieListEntry;
