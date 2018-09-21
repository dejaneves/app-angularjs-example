angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        templateUrl: 'pages/home.html',
        controller: 'BooksController as vm'
      })
      .state({
        name: 'bookEdit',
        url: '/book/:id',
        templateUrl: 'pages/book-detail.html',
        controller: 'BooksDetailController as vm'
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: 'pages/about.html'
      })
      .state({
        name: 'contact',
        url: '/contact',
        templateUrl: 'pages/contact.html'
      })
    $urlRouterProvider.otherwise('/home')
  })
