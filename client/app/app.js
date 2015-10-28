'use strict';

angular.module('booksApp', [
  'ui.router'
])
.config(function($locationProvider) {

  $locationProvider.html5Mode(true);
});
