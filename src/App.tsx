import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ITheme} from './@types/contexts/types';
import ThemeContext from './contexts/ThemeContext';
import RootStack from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [theme, setTheme] = useState({
    //colorscheme: 'dark',
    //accent: '#000',
    //backgroundColor: '#000',
    //textColor: '#f6ecc9',
    //secondaryColor: '#f6ecc9',
    //accentSecondary: '#eb7a53',
    colorscheme: 'light',
    accent: '#f6ecc9',
    backgroundColor: '#f6ecc9',
    textColor: '#000',
    secondaryColor: '#fff',
    accentSecondary: '#eb7a53',
  });

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
