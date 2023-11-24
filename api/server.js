const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./db/db');

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));
app.use(cors());

/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true'); // Use a string for 'true'
  next();
});
*/

const PORT = process.env.PORT || 3000;
//MONGODB CONNECTION
//console.log(process.env.MONGODB_URL);
connectDB();


//API
app.use('/', require('./Router/userRoute') );

app.use('/inscription',require('./Router/userRoute'));

app.use('/login',require('./Router/userLogin'));

app.listen(PORT, () => {

  console.log(`votre server demarre sur le  port ${PORT}!`);
});