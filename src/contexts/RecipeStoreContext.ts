import {createContext} from 'react';
import {RecipeStoreContextType} from '../@types/contexts/types';

const RecipeStoreContext = createContext<RecipeStoreContextType | null>(null);

export default RecipeStoreContext;
