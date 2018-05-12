const Twitter = require('twitter');
const dotenv = require('dotenv');

dotenv.config();

// create an instance of Twitter client
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

module.exports = {
  // get request handler for searching tweets
  get: (req, res) => {
    const { hashtags, resultCount, resultType } = req.query;

    // prepare params object to pass as parameters for get request to Twitter API
    let params = {
      q: hashtags,
      count: resultCount,
      resultType: resultType
    };

    // make get request to Twitter API with the parameters and send array of tweet objects back to client
    client.get('search/tweets', params, (error, tweets, response) => {
      if (error) {
        console.log('Error in API call');
      } else {
        res.send(tweets.statuses);
      }
    });
  }
}