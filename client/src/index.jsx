import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './containers/Search.jsx';
import TweetList from './containers/TweetList.jsx';
import testData from '../../server/testData.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: testData.tweets,
    };
  }

  searchTweets = () => {

  }

  render() {
    return (
      <div className="app-container">
        <h1>Twitter Content Lab</h1>
        <Search searchTweets={this.searchTweets} />
        <TweetList tweets={this.state.tweets} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));