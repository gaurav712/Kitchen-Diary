import {IErrors, IRecipe} from '../@types/recipe';

export const validateRecipeData = (recipe: IRecipe) => {
  let errors: IErrors = {
    errorsPresent: false,
    recipeName: '',
    duration: '',
    ingredients: {},
    stepsData: {},
  };

  /* Check name */
  if (!recipe.recipeName) {
    errors.errorsPresent = true;
    errors.recipeName = 'Recipe name cannot be blank!';
  }

  /* Check duration */
  const numValue = recipe.duration.split(' ')[0];
  if (isNaN(parseFloat(numValue)) || !(parseFloat(numValue) > 0)) {
    errors.errorsPresent = true;
    errors.duration = 'Duration is invalid!';
  }

  /* Check ingredients */
  for (const ingredient of Object.keys(recipe.ingredients)) {
    console.log('#ingredient', ingredient);
    if (!recipe.ingredients[ingredient].name) {
      continue;
    }

    /* Init an empty array to store errors for this specific ingredient */
    errors.ingredients[ingredient] = [];

    /* Check if amount is a number */
    if (isNaN(parseFloat(recipe.ingredients[ingredient].count))) {
      errors.errorsPresent = true;
      errors.ingredients[ingredient] = ['Quantity is not a number!'];
    }

    /* Amount should not be 0 */
    if (!(parseFloat(recipe.ingredients[ingredient].count) > 0)) {
      errors.errorsPresent = true;
      errors.ingredients[ingredient] = [
        ...errors.ingredients[ingredient],
        'Quantity is nil!',
      ];
    }

    /* Valid serving size */
    if (!recipe.ingredients[ingredient].servingSize) {
      errors.errorsPresent = true;
      errors.ingredients[ingredient] = [
        ...errors.ingredients[ingredient],
        'Serving Size is invalid!',
      ];
    }
  }

  /* Check steps */
  for (const step of Object.keys(recipe.stepsData)) {
    if (!recipe.stepsData[step]) {
      errors.errorsPresent = true;
      errors.stepsData = {
        ...errors.stepsData,
        [step]: 'Cannot be blank!',
      };
    }
  }

  return errors;
};
