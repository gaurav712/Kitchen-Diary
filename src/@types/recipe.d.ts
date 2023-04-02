export interface IIngredient {
  name: string;
  count: string;
  servingSize: string;
}

export interface IIngredientsData {
  [key: string]: IIngredient;
}

export interface IStepsData {
  [key: string]: string;
}

export interface IRecipe {
  recipeName: string;
  duration: string;
  ingredients: IIngredientsData;
  stepsData: IStepsData;
}

interface IErrorIngredient {
  [key: string]: string[];
}

interface IErrorSteps {
  [key: string]: string;
}

export interface IErrors {
  errorsPresent: boolean;
  recipeName?: string;
  duration?: string;
  ingredients: IErrorIngredient;
  stepsData: IErrorSteps;
}
