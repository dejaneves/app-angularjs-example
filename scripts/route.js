angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        templateUrl: 'pages/home.html'
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
