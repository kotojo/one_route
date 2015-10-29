'use strict';

angular.module('booksApp')
  .config(function ($stateProvider) {
    $stateProvider // we use the stateprovider to set up all the different states (like routes) to our app
      .state('book', { // when we go to the 'book' state it wil use the piece below to render the new page
        url: '/book',
        templateUrl: 'app/book/book.html', // it will show the html on the page when called
        controller: 'BookCtrl' // but the magic happens here! Go to book.controller.js to see the next step!
      });
  });
