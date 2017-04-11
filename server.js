'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

// Sets static folder to /public
app.use(express.static('public'));

// Uses Pug as the view enginer
app.set('view engine', 'pug');

// Parse application/json
app.use(bodyParser.json());

/**
 * GET /
 */
app.get('/', (req, res) => {
  res.render('index', {});
});

/**
 * POST /message
 */
app.post('/message', (req, res) => {
  //
  // @todo IMPLEMENT ME
  //
});

/**
 * Start listening for connections
 */
app.listen(3000, () => {
  console.log('Listening on port 3000...');
});