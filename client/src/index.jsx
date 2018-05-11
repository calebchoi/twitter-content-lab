import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './containers/Search.jsx';
import TweetList from './presentational/TweetList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      sortBy: 'favorites',
    };
  }

  search = () => {
    
  }

  render() {
    return (
      <div className="app-container">
        <Search />
        <TweetList tweets={this.state.tweets} sortBy={this.state.sortBy} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));