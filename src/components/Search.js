// IMPORTS
import React from 'react';


// COMPONENT
class Search extends React.Component {
  constructor(props) {
    // inheritance
    super(props);

    // state
    this.state = {
      value: ''
    };

    // method bindings
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // methods
  handleInputChange(e) {
    if (this.state.value === '') {
      this.setState({
        value: ''
      });
    }
    this.setState({
      value: e.target.value
    });
  }

  // render
  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button className="btn hidden-sm-down" onClick={() => this.props.handleSearchMovies(this.state.value)}> Submit
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


// // BOUNDARIES
// MovieListEntry.propTypes = {
//   movie: PropTypes.object.isRequired
// }


// EXPORTS
export default Search;