const express = require('express');
const proxy = require('express-http-proxy');
const morgan = require('morgan');
const config = require('./config.example.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/proxy', proxy(config.baseurl));

app.listen(port, () => {
  console.log(`Listening on port: -> ${port}`);
});
