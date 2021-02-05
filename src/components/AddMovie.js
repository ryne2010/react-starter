// IMPORTS
import React from 'react';


// COMPONENT
class AddMovie extends React.Component {
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



  render() {
    return (
      <div className="add-movie-bar">
        <form className="add-movie-bar-form" type="text">
          <h3 className="add-movie-bar-form-title"><em>Add Movie</em></h3>
          <label className="add-movie-bar-form-box">
            <input name="title" value={this.state.value} onChange={(e) => this.handleInputChange(e)}></input>
          </label>
        </form>
        <button className="add-movie-bar-submit" onClick={() => this.props.handleAddMovies(this.state.value)}> Submit
        </button>
      </div>
    );
  }
}


// BOUNDARIES


// EXPORTS
export default AddMovie;


// NOTES
