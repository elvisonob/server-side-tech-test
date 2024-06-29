const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed.js');
const userRoutes = require('./routes/user.js');
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Authorization'
  );
  next();
});

app.use('/user', feedRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occured' });
});

mongoose
  .connect(uri)
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
