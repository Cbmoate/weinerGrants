angular.module('grantApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        '': {
          templateUrl: 'views/main.html'
          },
        'nav@main': {
          templateUrl: '/views/assets/nav.html',
          controller: 'apiController'
          },
        'body@main': {
          templateUrl: '/views/body.html'
          },
        'footer@main':{
          templateUrl: '/views/assets/footer.html'
          }
      }
  })
})