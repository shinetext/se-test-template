'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const util = require('util');

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

async function db_check() {
  var connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'password',
    database: process.env.DATABASE,
  });
  connection.connect();

  const query = util.promisify(connection.query).bind(connection);
  try {
    let reuslts = await query(`show status`);

    console.log(reuslts);

    let status = {};
    for (const r of reuslts) {
      if (r.Variable_name === 'Connections') {
        status = Object.assign(status, { connections: r.Value });
      }
    }
    return status;
  } catch (error) {
    console.log('error');
    throw error;
  }
}

async function checkServices() {
  //
  // TODO: Check health of external services
  //
  return 'ok';
}

// health check
app.get('/health', async function(req, res) {
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
    const dbStatus = await db_check();
    const services_status = await checkServices();
    return res.json({
      db: dbStatus,
      services: services_status,
    });
  }
});

/**
 * Start listening for connections
 */
app.listen(8081, () => {
  console.log('Listening on port 8081...');
});
