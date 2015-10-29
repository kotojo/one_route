'use strict';

var path = require('path');

module.exports = function(app) {
  app.use('/api/books', require('./api/book')); // this is where we go for our /api/books routes!
  // follow this to server/api/book/index.js to see what we do when we go to this route!


  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(path.resolve('client/index.html'));
    });
};
