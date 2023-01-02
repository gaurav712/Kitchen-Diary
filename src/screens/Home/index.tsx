import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ThemeContext from '../../contexts/ThemeContext';

const Home = () => {
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View>
          <Text style={{color: themeContext?.theme?.accent}}>Hello There!</Text>
          <TouchableOpacity
            onPress={() => {
              themeContext?.setTheme({
                ...themeContext?.theme,
                accent: 'blue',
              });
            }}>
            <Text>Change to blue</Text>
          </TouchableOpacity>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Home;
