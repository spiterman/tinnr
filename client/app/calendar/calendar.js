angular.module('tinnr.calendar', [])
  .controller('CalendarController', ['$scope', 'Calendar', function ($scope, Calendar){
    // $scope.cols = 7;
    $scope.calendarMeals = [];
    // $scope.offsets = 0; //Not sure what this does

    $scope.getCalendarMeals = function() {
      Calendar.getCalendarMeals()
        .then(function (res) {
          // $scope.offsets = $scope.cols - (res.data.length % $scope.cols);
          $scope.calendarMeals = _.chunk(res.data);
          console.log($scope.calendarMeals)
        })
        .catch(function (error) {
          console.log('Error fetching meals', error);
        });
    };


    $scope.getCalendarMeals();

  }]);
