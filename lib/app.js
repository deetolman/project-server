const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));

app.use(express.json());

app.use(express.static('public')); 


const client = require('./db-client');

app.get('/api', (req, res) => {
  client.query(`
    SELECT * from profile;
  `)
    .then(result => res.json(result.rows));
});

module.exports = app;