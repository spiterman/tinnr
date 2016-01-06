angular.module('tinnr.calendar', [])
  .controller('CalendarController', ['$scope', 'Calendar', function($scope, Calendar){
    $scope.cols = 7;
    $scope.meals = [];
    $scope.offsets = 0; //Not sure what this does

    $scope.getMeals = function() {
      console.log('Hello World');
    }

    $scope.getMeals();

  }])
