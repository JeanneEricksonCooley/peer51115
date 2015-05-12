var express = require('express');
var router = express.Router();
//var path = require('path');

//var mongoose = require('mongoose');
//var path = require('path');
//var Student = require('../models/assignment');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
  if (err) return next(err);
});

//router.post('/', function(req, res, next) {
//  Student.create(req.body, function(err, post) {
//    res.json(post);
//  });
//});

module.exports = router;
