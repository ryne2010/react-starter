// IMPORTS
import React from 'react';

// COMPONENT
class MovieListEntry extends React.Component {
  constructor(props) {
    // inheritance
    super(props);

    // state
    this.state = {
      selected: false
    };

    // method bindings
    this.handleMovieTitleSelect = this.handleMovieTitleSelect.bind(this);
  }

  handleMovieTitleSelect(e) {
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    return (
    <div>
      <div className="movie-list-entry-bar">
        <div className="movie-list-entry-title" onClick={(e) => this.handleMovieTitleSelect(e)}>{this.props.movie.title}</div>
        <button className="movie-list-entry-watched-button" onClick={(movie) => this.props.handleWatchedStatus(this.props.movie)}>{this.props.movie.watchStatus}</button>
      </div>
      <div className="movie-list-entry-dropdown">
        {this.state.selected ? (
          <div className="movie-list-entry-details">
            <div><small>Year: {this.props.movie.details.year}</small></div>
            <div><small>Runtime: {this.props.movie.details.runtime}</small></div>
            <div><small>Metascore: {this.props.movie.details.metascore}</small></div>
            <div><small>IMDB Rating: {this.props.movie.details.imdbRating}</small></div>
            <div><small>Watched: {this.props.movie.watchStatus ? <span>&#9989;</span> : <span>&#10060;</span>}</small></div>
          </div>
        ) : null}
      </div>
    </div>
    );
  }
}








// render() {
//   return (
//     <div>
//       <div onClick={(e)=>this.togglePanel(e)} className="header">{this.props.title}</div>
//         {this.state.open ? (<div className="content">{this.props.children}</div>) : null}
//     </div>);
// }



// // BOUNDARIES
// MovieListEntry.propTypes = {
//   movie: PropTypes.object.isRequired
// }

// EXPORTS
export default MovieListEntry;