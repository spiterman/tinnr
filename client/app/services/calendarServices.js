angular.module('tinnr.calendarServices', [])
  .factory('Calendar', ['$http', function($http){
    var calendar = {};

    calendar.getDate = function() {
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

    // calendar.deleteMeal = function() {

    // };

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
