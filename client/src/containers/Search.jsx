import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      hashtags: '',
      count: 0,
      resultType: 'mixed'
    };
  }

  render() {
    return (
      <div className="searchMenu">
        <form>
          <div className="form-row">
            <div className="col-sm-4">
              <label>Hashtags</label>
              <input
                type="text"
                className="form-control"
                id="hashtag"
                aria-describedby="hashtagExample"
                placeholder="Enter hashtags separated by space"
              />
              <small id="hashtagExample" className="form-text text-muted">i.e. "#warriors #curry"</small>
            </div>

            <div className="col-sm-4">
              <label>Number of Results</label>
              <input type="number" className="form-control" id="resultCount" placeholder="Enter number of results" />
              <small id="resultCount" className="form-text text-muted">limit to 100 results; default at 15</small>
            </div>

            <div className="col-sm-4">
              <label>Result Type</label>
              <select className="form-control" id="resultType">
                <option>Popular</option>
                <option>Most Recent</option>
                <option>Mixed</option>
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