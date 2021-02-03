// IMPORTS
import React from 'react';

// COMPONENT
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}




var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      Search <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// // BOUNDARIES
// MovieListEntry.propTypes = {
//   movie: PropTypes.object.isRequired
// }

// EXPORTS
export default Search;


// // NOTES
// // search component example from React.ly
// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );