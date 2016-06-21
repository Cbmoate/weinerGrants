angular.module('portfolioApp', [
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
          'nav@main': {
            templateUrl: '/views/assets/constructionNav.html'
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
          'nav@team': {
            templateUrl: '/views/assets/constructionNav.html',
            
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
          'nav@mission': {
            templateUrl: '/views/assets/constructionNav.html',
            
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
            templateUrl: 'views/main.html'
          },
          'body@contact':{
            templateUrl: '/views/partials/contact-partial.html',
          }
        }
      })


    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);