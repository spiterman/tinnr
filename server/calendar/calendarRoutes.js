var calendarController = require('./calendarController.js');

module.exports = function(app) {
  app.get('/', calendarController.getDate)
}
