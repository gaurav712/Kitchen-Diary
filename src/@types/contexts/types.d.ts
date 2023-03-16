import {Context, Provider} from 'react';

export interface ITheme {
  colorscheme: string;
  accent: string;
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
  accentSecondary: string;
}

export type ThemeContextType = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

export type RecipeStoreContextType = {
  recipes: string[];
  setRecipes: (recipes: string[]) => void;
};

export type ToastContextType = {
  showToast: (string) => void;
};
