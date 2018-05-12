const router = require('express').Router();
const search = require('../actions/search');

// get request to homepage
router.get('/', (req, res) => {
  res.send(200);
});

// get request for tweet search
router.get('/search', search.get);

module.exports = router;
