angular.module('tinnr.calendarServices', [])
  .factory('Calendar', ['$http', function($http){
    var calendar = {};

    calendar.getCalendarMeals = function(param) {
        return $http({
            method: 'GET',
            url: '/api/users/calendar'
        })
        .then(function (res) {
            return res;
        }, function (res) {
            console.error('Error: ', res);
        });
    };

    // calendar.saveMeal = function() {

    // };

    calendar.removeCalendarMeal = function(meal) {
      return $http({
        method: 'POST',
        url: 'api/users/removeFromCalendar',
        data: meal
      })
      .then(function (res) {
        return res;
      })
    };

    calendar.addCal = function (meal) {
      return $http({
        method: 'POST',
        url: '/api/users/calendar',
        data: meal
      })
      .then( function (res) {
        return res;
      })
    }

    return calendar;

  }]);
