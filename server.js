var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  List = require('./api/models/listModel'), //created model loading here
  User = require('./api/models/userModel'),
  Category = require('./api/models/categoryModel'),
  APP = require('./api/models/appModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Appdb',function (err) {
  if (err) {
    console.log('连接失败');
  } else {
    console.log('连接成功');
  }
});


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (req.headers && req.headers.authorization) {
    jwt.verify(req.headers.authorization, 'RESTFULAPIs', function (err, decode) {
      if(err) {
        req.user = undefined
      }
      req.user = decode;
      next()
    })
  } else {
    req.user = undefined
    next()
  }
})

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);


console.log('API server started on: ' + port);