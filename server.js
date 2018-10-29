'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

/**
 * POST /message
 */
app.post('/message', (req, res) => {
  //
  // @todo IMPLEMENT ME
  //
});

// health check
app.get('/health', function(req, res) {
  const health = undefined;
  const type = req.query.type;
  type.toLowerCase();
  type.trim();
  if (type == 'uptime') {
    return res.json({ uptime: process.uptime() });
  }

  if (type == 'status') {
    return res.json({ status: 'UP' });
  }

  if (type == 'all') {
    return res.json({
      db: await dbcheck(),
      services: await checkServices(),
    })
  }
});

/**
 * Start listening for connections
 */
app.listen(8081, () => {
  console.log('Listening on port 8081...');
});

async function dbcheck() {
  //
  // Assume this does some sort of check against the database being used
  // and returns an object indicating its health.
  //
}

async function checkServices() {
  //
  // Assume this does some sort of check against external services being
  // used and returns an object indicating the health of each.
  //
}