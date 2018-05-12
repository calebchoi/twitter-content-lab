import React from 'react';
import PropTypes from 'prop-types';

// Tweet component builds the display for individual tweet with the metadata from tweet object
const Tweet = props => (
  <div className="tweet">
    <h5>
      {props.tweet.user.name}&emsp;
      <small className="text-muted">@{props.tweet.user.screen_name}</small>&emsp;
      <small className="text-muted">{props.tweet.created_at.split(' ').slice(0,4).join(' ')}</small>
    </h5>
    <p>{props.tweet.text}</p>
    <p>Favorited: {props.tweet.favorite_count} &emsp; Retweeted: {props.tweet.retweet_count}</p>
  </div>
);

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

export default Tweet;