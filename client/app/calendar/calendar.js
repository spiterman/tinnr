angular.module('tinnr.calendar', [])
  .controller('CalendarController', ['$scope', 'Calendar', function ($scope, Calendar){
    // $scope.cols = 7;
    $scope.calendarMeals = [];
    // $scope.offsets = 0; //Not sure what this does

    $scope.getCalendarMeals = function() {
      Meals.getCalendarMeals()
        .then(function (res) {
          $scope.offsets = $scope.cols - (res.data.length % $scope.cols);
          $scope.meals = _.chunk(res.data, $scope.cols);
        })
        .catch(function (error) {
          console.log('Error fetching meals', error);
        });
    };


    // $scope.getCalendarMeals();

  }]);
