import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import {ITheme} from './@types/contexts/types';
import {toastConfig} from './components/ToastConfig';
import dark from './constants/colorschemes/dark';
import light from './constants/colorschemes/light';
import RecipeStoreContext from './contexts/RecipeStoreContext';
import ThemeContext from './contexts/ThemeContext';
import ToastContext from './contexts/ToastContext';
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

  /* To show toasts */
  const showToast = (text: string) => {
    Toast.show({
      type: 'default',
      text1: text,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: ITheme) => setTheme(theme),
      }}>
      <RecipeStoreContext.Provider value={{recipes, setRecipes}}>
        <ToastContext.Provider value={{showToast}}>
          <SafeAreaView style={{flex: 1, backgroundColor: theme.accent}}>
            <StatusBar
              barStyle={
                theme.colorscheme === 'light' ? 'dark-content' : 'light-content'
              }
            />
            <NavigationContainer>
              <RootStack />
              <Toast
                position="bottom"
                bottomOffset={150}
                config={toastConfig}
              />
            </NavigationContainer>
          </SafeAreaView>
        </ToastContext.Provider>
      </RecipeStoreContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
