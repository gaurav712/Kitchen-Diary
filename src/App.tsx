import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ITheme} from './@types/contexts/types';
import ThemeContext from './contexts/ThemeContext';
import RootStack from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [theme, setTheme] = useState({
    colorscheme: 'light',
    accent: 'red',
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: ITheme) => setTheme(theme),
      }}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
