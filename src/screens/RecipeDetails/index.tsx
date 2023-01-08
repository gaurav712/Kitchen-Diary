import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../@types/navigation';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const RecipeDetails = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleExport = () => {
    console.log('Exporting...');
  };

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View
          style={[
            styles.container,
            {backgroundColor: themeContext?.theme.backgroundColor},
          ]}>
          <View style={styles.headerControls}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: themeContext?.theme.textColor,
                  shadowColor: themeContext?.theme.textColor,
                },
              ]}
              onPress={handleBack}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={themeContext?.theme.accent}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: themeContext?.theme.textColor,
                  shadowColor: themeContext?.theme.textColor,
                },
              ]}
              onPress={handleExport}>
              <MaterialCommunityIcons
                name="export-variant"
                size={30}
                color={themeContext?.theme.accent}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default RecipeDetails;
