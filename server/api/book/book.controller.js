'use strict';

var Book = require('./book.model'); // We require out mongoose model from book.model.js

exports.index = function(req, res) { // This is the method called from /api/books
  Book.find({}, function (err, books) { // We find all the books in the database
    if(err) { return handleError(res, err); } // If there was an error we return a 500 and the err
    return res.status(200).json(books); // If we get books back, we send a 200 with the books
  });
}; // Everything from here bubbles back up to the original place it was called handing back the response
// To see what happens with the response lets go back to client/app/book/book.controller.js!

function handleError(res, err) {
  return res.send(500, err);
}
