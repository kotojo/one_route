'use strict';

var express = require('express');
var controller = require('./book.controller');

var router = express.Router(); // here we setup the express router middleware to do things when we hit certain routes and pass them on to the next step


// all routes defined here would begin with /api/books
router.get('/', controller.index); // this calls the base api/books route, follow what it does to book.controller.js!

module.exports = router;
