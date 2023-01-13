export interface IIngredient {
  name: string;
  count: number;
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
