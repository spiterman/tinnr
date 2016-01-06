var recipeController = require('./recipeController.js');

module.exports = function(app) {
  // app.get('/', recipeController.getR decipes);
  app.get('/', recipeController.showRecipes);
  app.post('/', recipeController.saveRecipe);
};
