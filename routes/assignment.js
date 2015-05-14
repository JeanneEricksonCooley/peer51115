var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Student = require('../models/assignment');

/* GET  listing. */
router.get('/', function(req, res, next) {
    console.log("MADE IT HERE!");
    Student.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

router.post('/', function(req, res, next) {
    Student.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
    Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /:id */
router.delete('/:id', function(req, res, next) {
    Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
