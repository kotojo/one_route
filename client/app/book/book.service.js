'use strict';

angular.module('booksApp')
  .service('Book', function($http) {

    this.getAllBooks = function() {
      return $http.get('/api/books');
    };
  });
