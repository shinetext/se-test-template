'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse application/json
app.use(bodyParser.json());

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
