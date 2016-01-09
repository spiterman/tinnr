angular.module('tinnr.calendar', [])
  .controller('CalendarController', ['$scope', 'Calendar', function ($scope, Calendar){
    $scope.cols = 5;
    $scope.calendarMeals = [];
    $scope.offsets = 0; 

    $scope.getCalendarMeals = function() {
      Calendar.getCalendarMeals()
        .then(function (res) {
          $scope.offsets = $scope.cols - (res.data.length % $scope.cols);
          $scope.calendarMeals = _.chunk(res.data, $scope.cols);
          console.log($scope.calendarMeals, "calMeal")
        })
        .catch(function (error) {
          console.log('Error fetching meals', error);
        });
    };

    $scope.removeMeal = function(meal) {
      Calendar.removeMeal(meal)
        .then(function (res) {
          $scope.alerts.push({type: 'success', msg: 'Meal has been removed from your calendar!'});
        })
        .catch(function (error) {
          $scope.alerts.push({type: 'danger', msg: 'Error removing meal from your calend`.'});
          console.log(' Error removing meal from your calendar', error);
        });
    };

    $scope.getCalendarMeals();

  }]);
