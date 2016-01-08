angular.module('tinnr.mealsServices', [])
  .factory('Meals', ['$http', function($http) {
    var meals = {};

    meals.getMeals = function () {
      return $http({
        method: 'GET',
        url: '/api/users/meals'
      })
      .then(function (res) {
        return res;
      }, function (res) {
        console.error('Error: ', res);
      });
    };

    meals.saveMeal = function (meal) {
      console.log(meal, "mealSer.js line 18")
      return $http({
        method: 'POST',
        url: '/api/users/meals',
        data: meal
      })
      .then(function (res) {
        return res;
      });
    };

    return meals; 
  }]);