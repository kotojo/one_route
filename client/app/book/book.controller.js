'use strict';

angular.module('booksApp')
  .controller('BookCtrl', function($scope, Book) {
    function getAllBooks() {
      Book.getAllBooks().then(function(res){
        $scope.books = res.book;
      });
    }

    getAllBooks();
  });
