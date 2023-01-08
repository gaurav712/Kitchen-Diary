import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../@types/navigation';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const AddRecipe = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    console.log('Saving...');
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
              onPress={handleSave}>
              <MaterialCommunityIcons
                name="check"
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

export default AddRecipe;
