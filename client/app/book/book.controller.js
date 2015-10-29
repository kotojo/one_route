'use strict';

angular.module('booksApp')
  .controller('BookCtrl', function($scope, Book) {

    // creating function to get all books
    function getAllBooks() { // this calls the Book service, follow the call to book.service.js
      Book.getAllBooks().then(function(res){
        $scope.books = res.data; // We made it back with the response, and we attach it to $scope.books
      }); // Follow it to book.html to see what we do with it!
    }

    // this calls get all books when the controller is loaded
    getAllBooks();
  });
