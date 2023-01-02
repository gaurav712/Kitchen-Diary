import {createContext} from 'react';
import {ThemeContextType} from '../@types/contexts/types';

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
