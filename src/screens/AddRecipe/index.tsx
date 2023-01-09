import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../@types/navigation';
import CustomTextInput from '../../components/CustomTextInput';
import IngredientInputListTemplate from '../../components/IngredientInputListTemplate';
import TimeInput from '../../components/TimeInput';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const AddRecipe = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const [recipeData, setRecipeData] = useState({
    recipeName: '',
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    console.log('Saving...');
  };

  const handleAddImage = () => {
    console.log('Adding Image...');
  };

  const handleChangeDuration = (duration: string) => {
    console.log(duration);
  };

  const AddImageIconComponent = () => {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <View
            style={[
              styles.addImageIconContainer,
              {
                borderColor: themeContext?.theme.textColor,
              },
            ]}>
            <MaterialCommunityIcons
              name="image-filter-hdr"
              color={themeContext?.theme.textColor}
              size={50}
            />
            <View
              style={[
                styles.addImagePlusIcon,
                {
                  backgroundColor: themeContext?.theme.textColor,
                },
              ]}>
              <MaterialCommunityIcons
                name="plus"
                color={themeContext?.theme.backgroundColor}
                size={30}
              />
            </View>
          </View>
        )}
      </ThemeContext.Consumer>
    );
  };

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View
          style={[
            styles.container,
            {backgroundColor: themeContext?.theme.backgroundColor},
          ]}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.recipeForm}>
              <TouchableOpacity
                style={[
                  styles.addRecipeImage,
                  {borderColor: themeContext?.theme.textColor},
                ]}
                onPress={handleAddImage}>
                <AddImageIconComponent />
              </TouchableOpacity>

              {/* The form */}
              <CustomTextInput
                placeholder="Name your dish"
                label="Recipe Name"
                value={recipeData.recipeName}
                onChangeText={recipeName =>
                  setRecipeData({...recipeData, recipeName})
                }
                iconName={'food'}
                contentContainerStyle={styles.formField}
              />
              <TimeInput
                label="Time to cook"
                iconName="clock"
                onChangeTime={handleChangeDuration}
                contentContainerStyle={styles.formField}
              />
              <IngredientInputListTemplate
                contentContainerStyle={styles.formField}
              />
            </View>
          </ScrollView>
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
