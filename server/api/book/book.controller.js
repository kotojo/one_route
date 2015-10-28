'use strict';

var Book = require('./book.model');

exports.index = function(req, res) {
  Book.find({}, function (err, books) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(books);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
