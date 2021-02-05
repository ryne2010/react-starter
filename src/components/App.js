// IMPORTS
import React from 'react';
import MovieListEntry from './MovieListEntry.js';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

// INITIAL STATE
var initialMovieList = [
  {title: 'Mean Girls', watchStatus: false, details: {year: '2004', runtime: '97 min', metascore: '66', imdbRating: '7.0'}},
  {title: 'Hackers', watchStatus: false, details: {year: '1995', runtime: '107 min', metascore: '46', imdbRating: '6.2'}},
  {title: 'The Grey', watchStatus: false, details: {year: '2011', runtime: '117 min', metascore: '64', imdbRating: '6.8'}},
  {title: 'Sunshine', watchStatus: false, details: {year: '2007', runtime: '107 min', metascore: '64', imdbRating: '7.2'}},
  {title: 'Ex Machina', watchStatus: false, details: {year: '2014', runtime: '108 min', metascore: '78', imdbRating: '7.7'}},
  {title: 'Django Unchained', watchStatus: false, details: {year: '2012', runtime: '165 min', metascore: '81', imdbRating: '8.4'}},
  {title: 'Interstellar', watchStatus: false, details: {year: '2014', runtime: '169 min', metascore: '74', imdbRating: '8.6'}},
  {title: 'Office Space', watchStatus: false, details: {year: '1999', runtime: '89 min', metascore: '68', imdbRating: '7.7'}}
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
    this.handleSearchMovies = this.handleSearchMovies.bind(this);
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.handleWatchedStatus = this.handleWatchedStatus.bind(this);
  }

  // methods
  handleSearchMovies(query, callback) {
    // handle a reset case
    if (query === '') {
      this.setState({
        movies: initialMovieList
      })
    }
    // search
    let {movies} = this.state;
    let result = movies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    // no movies found
    if (result.length === 0) {
      result.push({title: 'no results found'});
    }
    // set state
    this.setState({
      movies: result
    })
  }

  handleAddMovies(newMovie, callback) {
    // handle first case
    if (this.state.movies === initialMovieList) {
      this.setState({
        movies: [{'title': newMovie}]
      })
    } else {
      this.setState({
        movies: [...this.state.movies, {'title': newMovie}]
      })
    }
  }

  handleWatchedStatus(movie) {
    let {movies} = this.state;
    let movieTitle = movie.title;
    let movieWatchStatus = movie.watchStatus;

    let test = (mov) => mov.title === movieTitle;
    let movieIndex = movies.findIndex(test);

    if (movieWatchStatus === false) {
      movies[movieIndex].watchStatus = true;
      this.setState({
        movies: movies
      })
    } else {
      movies[movieIndex].watchStatus = false;
      this.setState({
        movies: movies
      })
    }
  }

  handleWatchedButton() {
    let {movies} = this.state;
    let watchedMovies = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].watchStatus === true) {
        watchedMovies.push(movies[i]);
      }
    }
    this.setState({
      movies: watchedMovies
    })
  }

  handleToWatchButton() {
    let {movies} = this.state;
    let toWatchMovies = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].watchStatus === false) {
        toWatchMovies.push(movies[i]);
      }
    }
    this.setState({
      movies: toWatchMovies
    })
  }

  // render to DOM
  render() {
    return(
      <div>
        <div className="title-bar">
          <h1>MOVIE LIST</h1>
        </div>
        <nav className="addMovie-bar">
          <div><AddMovie handleAddMovies={this.handleAddMovies}/></div>
        </nav>
        <div className="app-body">
          <div className="watch-selector-buttons">
            <button className="watchStatusSelector" onClick={() => this.handleWatchedButton()}>Watched</button>
            <button className="watchStatusSelector" onClick={() => this.handleToWatchButton()}>To Watch</button>
          </div>
          <nav className="search-bar">
            <div><h3><em>Search</em><Search handleSearchMovies={this.handleSearchMovies}/></h3></div>
          </nav>
          <div className="movie-list">
            <MovieList movies={this.state.movies} handleWatchedStatus={this.handleWatchedStatus}/>
          </div>
        </div>
      </div>
    )
  }

}

// EXPORTS
export default App;