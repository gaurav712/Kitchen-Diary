import {Text, View} from 'react-native';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const RecipeDetails = () => {
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View
          style={[
            styles.container,
            {backgroundColor: themeContext?.theme.backgroundColor},
          ]}>
          <Text>Hello</Text>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default RecipeDetails;
