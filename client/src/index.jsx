import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './containers/Search.jsx';
import TweetList from './containers/TweetList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  // makes a get request to the server with the specified query from the search menu
  searchTweets = (hashtags, resultCount, resultType) => {
    let body = { params: { hashtags, resultCount, resultType } };
    axios.get('/search', body)
      .then(results => {
        this.setState({
          tweets: results.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app-container">
        <div className="top-container">
          <div className="title row justify-content-center">
            <img src="/assets/twitter-bird.png" alt="twitter bird" className="img twitter-bird" /> &nbsp;
            <h1><strong>Twitter Content Lab</strong></h1>
          </div>
          <Search searchTweets={this.searchTweets} />
        </div>
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));