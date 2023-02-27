var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');

//Process Configuration File
require("dotenv").config();

// Database Connection
require("./config/database");

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.use('*', (req, res, err) => {
  if (err) console.error(err)
  res.send("Welcome to Workers Backend....s");
})

app.get("/search/:key", async (req, resp) => {
  let data = await Charity.find(
    {
      "$or": [
        { name: { $regex: req.params.key } },
        { location: { $regex: req.params.key } },
        { sector: { $regex: req.params.key } },
        { size: { $regex: req.params.key } }
      ]
    }
  )
  resp.send(data);

})

module.exports = app;