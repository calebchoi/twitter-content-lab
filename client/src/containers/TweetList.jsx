import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../presentational/Tweet.jsx';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      sortBy: 'favorites'
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.tweets !== nextProps.tweets) {
      let newTweets = TweetList.sortTweets(prevState.sortBy, nextProps.tweets);
      return {
        tweets: nextProps.tweets
      };
    } else {
      return null;
    }
  }

  static sortTweets(sortOption, prev_tweets) {
    let tweets = prev_tweets.slice();
    if (sortOption === 'favorites') {
      tweets.sort((a, b) => {
        return b.favorite_count - a.favorite_count;
      });
    } else if (sortOption === 'retweets') {
      tweets.sort((a, b) => {
        return b.retweet_count - a.retweet_count;
      });
    } else {
      tweets.sort((a, b) => {
        return b.id - a.id;
      });
    }
    return tweets;
  }

  handleChange = (e) => {
    let tweets = TweetList.sortTweets(e.target.value, this.state.tweets);
    this.setState({
      tweets: tweets,
      sortBy: e.target.value
    });
  }

  render() {
    return (
      <div className="tweetList">
        <div className="tweetListHeader row">
          <h3 className="col-md-9">Tweets:</h3>
          <div className="sortOption col-md-3">
            <select className="form-control" id="sortBy" onChange={this.handleChange}>
              <option value="favorites">Most Favorited</option>
              <option value="retweets">Most Retweeted</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>
        {this.state.tweets.map(tweet => (
          <Tweet
            tweet={tweet}
            key={tweet.id_str}
          />
        ))}
      </div>
    );
  }
}

export default TweetList;