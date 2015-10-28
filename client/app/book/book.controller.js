'use strict';

angular.module('booksApp')
  .controller('BookCtrl', function($scope, Book) {
    function getAllBooks() {
      Book.getAllBooks().then(function(res){
        console.log(res);
        $scope.books = res.data;
      });
    }

    getAllBooks();
  });
