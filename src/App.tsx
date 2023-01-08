import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {ITheme} from './@types/contexts/types';
import dark from './constants/colorschemes/dark';
import light from './constants/colorschemes/light';
import ThemeContext from './contexts/ThemeContext';
import RootStack from './navigation';

const App = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  const [theme, setTheme] = useState(dark);

  const colorscheme = useColorScheme();

  useEffect(() => {
    if (colorscheme) {
      setTheme(colorscheme === 'light' ? light : dark);
    }
  }, [colorscheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: ITheme) => setTheme(theme),
      }}>
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
    </ThemeContext.Provider>
  );
};

export default App;
