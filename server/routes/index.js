const router = require('express').Router();
const search = require('../actions/search');

router.get('/', (req, res) => {
  res.send(200);
});

router.get('/search', search.get);

module.exports = router;
