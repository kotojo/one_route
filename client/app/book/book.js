'use strict';

angular.module('booksApp')
  .config(function ($stateProvider) {
    console.log('book.js config');
    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl'
      });
  });
