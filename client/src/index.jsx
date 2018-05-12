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
        <h1>Twitter Content Lab</h1>
        <Search searchTweets={this.searchTweets} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));