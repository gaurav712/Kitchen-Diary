import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {Alert, ScrollView, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../@types/navigation';
import {IErrors, IIngredientsData, IStepsData} from '../../@types/recipe';
import CustomTextInput from '../../components/CustomTextInput';
import IngredientInputListTemplate from '../../components/IngredientInputListTemplate';
import StepsInputTemplate from '../../components/StepsInputTemplate';
import TimeInput from '../../components/TimeInput';
import RecipeStoreContext from '../../contexts/RecipeStoreContext';
import ThemeContext from '../../contexts/ThemeContext';
import ToastContext from '../../contexts/ToastContext';
import {validateRecipeData} from '../../util/validator';
import styles from './styles';

const AddRecipe = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const recipeStoreContext = useContext(RecipeStoreContext);
  const toastContext = useContext(ToastContext);

  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    duration: '',
    ingredients: {},
    stepsData: {},
  });

  const [_, setInputErrors] = useState<IErrors>({
    errorsPresent: false,
    recipeName: '',
    duration: '',
    ingredients: {},
    stepsData: {},
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave = async () => {
    /* Validate data to be saved */
    const errors = validateRecipeData(recipeData);

    if (errors.errorsPresent) {
      setInputErrors(errors);
      toastContext?.showToast("Couldn't save recipe!");
      return;
    }

    try {
      let recipes = recipeStoreContext?.recipes;
      if (recipes) {
        /* Check if the recipe already exists */
        if (recipes.includes(recipeData.recipeName)) {
          Alert.alert('Error Saving Recipe!', 'Recipe already exists!');
          return;
        }

        recipes = [...recipes, recipeData.recipeName];
        await storeData('recipes', JSON.stringify(recipes));
        await storeData(recipeData.recipeName, JSON.stringify(recipeData));
        recipeStoreContext?.setRecipes(recipes);

        /* Indicate that the recipe was saved successfully */
        toastContext?.showToast('Recipe Saved!');

        /* Back to home screen */
        handleBack();
      }
    } catch (err) {
      Alert.alert('Error Saving Recipe!', 'Something went wrong.');
    }
  };

  const handleAddImage = () => {
    console.log('Adding Image...');
  };

  const handleChangeDuration = (duration: string) => {
    setRecipeData({...recipeData, duration});
  };

  const handleIngredientsChange = (ingredients: IIngredientsData) => {
    setRecipeData({...recipeData, ingredients});
  };

  const handleStepsChange = (stepsData: IStepsData) => {
    setRecipeData({...recipeData, stepsData});
  };

  /* Feedback for when the data changes */
  useEffect(() => {
    if (recipeData) console.log(JSON.stringify(recipeData, null, 2));
  }, [recipeData]);

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
                onChange={handleIngredientsChange}
                contentContainerStyle={styles.formField}
              />
              <StepsInputTemplate onChange={handleStepsChange} />
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
