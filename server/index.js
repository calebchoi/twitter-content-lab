const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const router = require('./routes');
const search = require('./actions/search');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use('/', router);

const port = process.env.PORT || 8000;

app.listen(app.get('port'), () => {
  console.log(`listening on port ${port}`);
});
