import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      hashtag: '',
      resultCount: null,
      resultType: 'popular'
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {

  }

  render() {
    return (
      <div className="searchMenu justify-content-center">
        <form>
          <div className="form-row">
            <div className="col-md-4">
              <label>Hashtags</label>
              <input
                type="text"
                className="form-control"
                id="hashtag"
                aria-describedby="hashtagExample"
                placeholder="Enter hashtags separated by space"
                onChange={this.handleChange}
              />
              <small id="hashtagExample" className="form-text text-muted">i.e. "#warriors #curry"</small>
            </div>

            <div className="col-md-4">
              <label>Number of Results</label>
              <input
                type="number"
                className="form-control"
                id="resultCount"
                placeholder="Enter number of results (1-100)"
                onChange={this.handleChange}
              />
              <small id="resultCount" className="form-text text-muted">default at 15</small>
            </div>

            <div className="col-md-4">
              <label>Result Type</label>
              <select className="form-control" id="resultType" onChange={this.handleChange}>
                <option value="popular">Popular</option>
                <option value="recent">Most Recent</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>  
          </div>

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;