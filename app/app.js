angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "app/about/aboutTmpl.html"
    })

    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html',
      controller: 'packagesCtrl'
    })

    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html',
      controller: 'locationCtrl'
    })

    .state('booked', {
      url: ('/booked/:id'),
      templateUrl: 'app/booked/bookedTmpl.html',
      controller: 'bookedCtrl'
    })

    .state('adventurers', {
      url: '/adventureres',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contactTmpl.html',
      parent: 'home'
    })

  $urlRouterProvider
    .otherwise('/');
});
