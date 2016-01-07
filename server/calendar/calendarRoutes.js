var calendarController = require('./calendarController.js');

module.exports = function(app) {
  app.get('/calendar', calendarController.getDate);
  app.post('/calendar', calendarController.addCal);
}
