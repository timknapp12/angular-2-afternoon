angular.module('devmtnTravel').controller('locationCtrl', function( $scope, mainSrvc ) {
    mainSrvc.getTravelInfo().then( function( response ) {
      $scope.locations = response.data;
    });
  });