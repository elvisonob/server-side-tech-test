const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed.js');
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeaders('Access-Control-Allow-Origin', '*');
  res.setHeaders(
    'Access-Control-Allow-Methods',
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  );
  res.setHeaders(
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Authorization'
  );
  next();
});

app.use('/user', feedRoutes);

mongoose
  .connect(uri)
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
