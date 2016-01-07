angular.module('tinnr.meals', [])
  .controller('MealsController', ['$scope', 'Meals', 'Calendar', function ($scope, Meals, Calendar) {
    $scope.cols = 4;
    $scope.meals = [];
    $scope.offsets = 0;

    $scope.getMeals = function() {
      Meals.getMeals()
        .then(function (res) {
          $scope.offsets = $scope.cols - (res.data.length % $scope.cols);
          $scope.meals = _.chunk(res.data, $scope.cols);
        })
        .catch(function (error) {
          console.log('Error fetching meals', error);
        });
    };

    $scope.addCal = function(){
      console.log('hello');
      //modify Calendar
      Calendar.addCal()
        .then(function (res) {
          console.log(res, "response was sent 23 meals.js")
        })
        .catch(function (error) {
          console.log(' Error fetch meals', error);
        });
    };

    $scope.getMeals();
  }]);