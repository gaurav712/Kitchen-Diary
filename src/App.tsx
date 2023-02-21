import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {ITheme} from './@types/contexts/types';
import dark from './constants/colorschemes/dark';
import light from './constants/colorschemes/light';
import RecipeStoreContext from './contexts/RecipeStoreContext';
import ThemeContext from './contexts/ThemeContext';
import RootStack from './navigation';

const App = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  const [theme, setTheme] = useState(dark);
  const [recipes, setRecipes] = useState<string[]>([]);

  const colorscheme = useColorScheme();

  useEffect(() => {
    if (colorscheme) {
      setTheme(colorscheme === 'light' ? light : dark);
    }
  }, [colorscheme]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipes = await AsyncStorage.getItem('recipes');
        if (recipes) {
          console.log(recipes);
          setRecipes(JSON.parse(recipes));
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: ITheme) => setTheme(theme),
      }}>
      <RecipeStoreContext.Provider value={{recipes, setRecipes}}>
        <SafeAreaView style={{flex: 1, backgroundColor: theme.accent}}>
          <StatusBar
            barStyle={
              theme.colorscheme === 'light' ? 'dark-content' : 'light-content'
            }
          />
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaView>
      </RecipeStoreContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
