'use strict';

angular.module('booksApp')
  .factory('Book', function($http) {
    var bookFactory = {};

    bookFactory.getAllBooks = function() {
      return $http.get('/api/books');
    };

    return bookFactory;
  });
