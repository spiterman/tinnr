angular.module('tinnr.meals', [])
  .controller('MealsController', ['$scope', 'Meals', 'Calendar', function ($scope, Meals, Calendar) {
    $scope.cols = 4;
    $scope.meals = [];
    $scope.offsets = 0;
    $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    $scope.selectedDay = '';
    $scope.threeMeals = ['Breakfast', 'Lunch', 'Dinner']
    $scope.selectedDay = '';

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

    $scope.addCal = function(meal){
      meal.selectedDay = $scope.selectedDay;
      meal.selectedMeal = $scope.selectedMeal;
      console.log(meal);
      Calendar.addCal(meal)
        .then(function (res) {
        })
        .catch(function (error) {
          console.log(' Error fetch meals', error);
        });
    };

    $scope.getSelectedDay = function(day) {
      $scope.selectedDay = day;
      console.log($scope.selectedDay);
    };

    $scope.getSelectedMeal = function(meal) {
      $scope.selectedMeal = meal;
      console.log($scope.selectedMeal);
    };

    $scope.getMeals();
  }]);
