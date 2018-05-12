const Twitter = require('twitter');
const dotenv = require('dotenv');

dotenv.config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

module.exports = {
  get: (req, res) => {
    const { hashtags, resultCount, resultType } = req.query;
    let params = {
      q: hashtags,
      count: resultCount,
      resultType: resultType
    };

    client.get('search/tweets', params, (error, tweets, response) => {
      if (error) {
        throw new Error('Error in API call');
      } else {
        res.send(tweets.statuses);
      }
    });
  }
}