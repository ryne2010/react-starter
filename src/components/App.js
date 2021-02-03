// IMPORTS
import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';

// INITIAL STATE
var initialMovieList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// APP
class App extends React.Component {
  constructor(props) {
    // inheritance
    super(props);

    // state
    this.state = {
      movies: initialMovieList
    };

    // method bindings

  }

  render() {
    return(
      <div>
        <div><h1>MOVIE LIST</h1></div>
        <nav className="navbar">
          <div><h3><em>Search</em><Search /></h3></div>
        </nav>
        <div className="app-body">
          <div className="movie-list">
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    )
  }

}

// EXPORTS
export default App;