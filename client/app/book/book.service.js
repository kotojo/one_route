'use strict';

angular.module('booksApp')
  .factory('Book', function($http) {
    var bookFactory = {};

    // creating a method on the bookFactory to get all books from the server
    bookFactory.getAllBooks = function() {
      return $http.get('/api/books'); // this will go to the backend routes, follow it to server/app.js
    };

    return bookFactory;
  });
