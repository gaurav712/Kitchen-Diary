import {Context, Provider} from 'react';

export interface ITheme {
  colorscheme: string;
  accent: string;
}

export type ThemeContextType = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};
