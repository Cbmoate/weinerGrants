angular.module('grantApp', [
  'ui.router', 
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'body@main': {
            templateUrl: '/views/partials/landing-partial.html'
          }
        }
      })

      .state('team', {
        url: '/team',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'body@team':{
            templateUrl: '/views/partials/team-partial.html',
          }
        }
      })

      .state('mission', {
        url: '/mission',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'body@mission':{
            templateUrl: '/views/partials/mission-partial.html',
          }
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'body@contact':{
            templateUrl: '/views/partials/contact-partial.html',
          }
        }
      })

      .state('results', {
        url: '/results',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'body@results':{
            templateUrl: '/views/partials/results-partial.html'
          }
        }
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);