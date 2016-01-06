angular.module('tinnr.calendarServices', [])
  .factory('Calendar', ['$http', function($http){
    var calendar = {};

    calendar.getMeals = function() {
        return $http({
            method: 'GET',
            url: '/api/users/calendar'
        })
        .then(function(res){
            return res;
        }, function(res){
            console.error('Error: ', res);
        });

    };

    calendar.saveMeal = function() {

    };

    calendar.deleteMeal = function() {

    };

    return calendar;

  }])
