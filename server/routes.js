'use strict';

var path = require('path');

module.exports = function(app) {
  app.use('/api/books', require('./api/book'));

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(path.resolve('client/index.html'));
    });
};
