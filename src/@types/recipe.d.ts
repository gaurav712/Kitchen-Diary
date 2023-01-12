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
