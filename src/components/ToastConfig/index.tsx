import {View, Text} from 'react-native';
import {ToastConfig} from 'react-native-toast-message';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

export const toastConfig: ToastConfig = {
  default: ({text1}) => (
    <ThemeContext.Consumer>
      {themeContext => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: `${themeContext?.theme.textColor}dd`,
              borderColor: themeContext?.theme.backgroundColor,
            },
          ]}>
          <Text
            style={[styles.text, {color: themeContext?.theme.backgroundColor}]}>
            {text1}
          </Text>
        </View>
      )}
    </ThemeContext.Consumer>
  ),
};
