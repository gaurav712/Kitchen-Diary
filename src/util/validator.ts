import {IRecipe} from '../@types/recipe';

export const validateRecipeData = (recipe: IRecipe) => {
  let response: string[] = [];

  /* Check name */
  if (!recipe.recipeName) {
    response.push('Recipe name cannot be blank!');
  }

  /* Check duration */
  const numValue = recipe.duration.split(' ')[0];
  if (isNaN(parseFloat(numValue))) {
    response.push('Duration is invalid!');
  }

  /* Check ingredients */
  for (const ingredient of Object.keys(recipe.ingredients)) {
    if (isNaN(recipe.ingredients[ingredient].count)) {
      response.push(
        `Quantity for "${recipe.ingredients[ingredient].name}" is not a number!`,
      );
    }
  }

  return response;
};
