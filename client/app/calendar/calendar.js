angular.module('tinnr.calendar', [])
  .controller('CalendarController', ['$scope', 'Calendar', function ($scope, Calendar){
    $scope.cols = 5;
    $scope.calendarMeals = [];
    $scope.offsets = 0; //Not sure what this does
    $scope.mealsOfDay = ['Breakfast', 'Lunch', 'Dinner'];
    $scope.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.organizedMeals = {
      'Monday': [false, 0, null],
      'Tuesday': [false, 0, null],
      'Wednesday': [false, 0, null],
      'Thursday': [false, 0, null],
      'Friday': [false, 0, null],
      'Saturday': [false, 0, null],
      'Sunday': [false, 0, null]
    };

    $scope.organizeCalendarMeals = function(array){
      var m = $scope.mealsOfDay;
      for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
          var mealObj = array[i][j];
          // console.log(mealObj);
          for(var key in $scope.organizedMeals) {
            if(mealObj.selectedDay === key && $scope.mealsOfDay.indexOf(mealObj.selectedMeal) !== -1 ) {
              // console.log($scope.mealsOfDay.indexOf(mealObj.selectedMeal));   //Logs the index of the meals selectedDay in mealsOfDay

              $scope.organizedMeals[key][$scope.mealsOfDay.indexOf(mealObj.selectedMeal)] = mealObj;
              // $scope.organizedMeals[key].push(mealObj)
            }
          }
          // $scope.organizedMeals[mealObj.selectedDay][m.indexOf(mealObj.selectedMeal)] = mealObj;
        }
      }
      console.log($scope.organizedMeals)   //Logs the organized meals
    };


    $scope.getCalendarMeals = function() {
      Calendar.getCalendarMeals()
        .then(function (res) {
          $scope.offsets = $scope.cols - (res.data.length % $scope.cols);
          $scope.calendarMeals = _.chunk(res.data, $scope.cols);
          // console.log($scope.calendarMeals, "calMeal")
          // console.log($scope.calendarMeals[0][0].selectedDay === 'Monday')

          /*
          fpr key in organized meals
            if scope.calendarmeals.selectedday === key
            push
          */


          // $scope.organizedMeals[$scope.calendarMeals[0][0].selectedDay][$scope.mealsOfDay.indexOf($scope.calendarMeals[0][0].selectedMeal)] = 'abc'
          // console.log($scope.organizedMeals[$scope.calendarMeals[0][0].selectedDay][$scope.mealsOfDay.indexOf($scope.calendarMeals[0][0].selectedMeal)] )

          // console.log($scope.organizedMeals.indexOf($scope.calendarMeals[0][0].selectedDay))
        })
        .then(function (){
          // console.log('Hello Worldy Worly')
          $scope.organizeCalendarMeals($scope.calendarMeals);
          // console.log($scope.organizedMeals)
        })

        .catch(function (error) {
          console.log('Error fetching meals', error);
        });
    };


    $scope.getCalendarMeals();

  }]);
