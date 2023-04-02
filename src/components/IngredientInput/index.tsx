import {useEffect, useState} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IIngredient} from '../../@types/recipe';
import ThemeContext from '../../contexts/ThemeContext';
import CustomTextInput from '../CustomTextInput';
import styles from './styles';

const IngredientInput = ({
  label,
  onChange,
  contentContainerStyle,
}: {
  label?: string;
  onChange: (ingredients: IIngredient) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}) => {
  const [ingredient, setIngredient] = useState<IIngredient>({
    name: '',
    count: 0,
    servingSize: '',
  });

  const handleIngredientNameChange = (name: string) => {
    setIngredient({...ingredient, name});
  };

  const handleCountChange = (value: string) => {
    setIngredient({...ingredient, count: parseInt(value)});
  };

  const handleServingSizeChange = (servingSize: string) => {
    setIngredient({...ingredient, servingSize});
  };

  /* handle onChange */
  useEffect(() => {
    onChange(ingredient);
  }, [ingredient]);

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={[styles.container, contentContainerStyle]}>
          {label ? (
            <Text
              style={[styles.label, {color: themeContext?.theme.textColor}]}>
              {label}
            </Text>
          ) : null}
          <CustomTextInput
            inputStyle={styles.ingredientNameInput}
            label={label}
            placeholder="Ingredient Name"
            value={ingredient.name}
            onChangeText={handleIngredientNameChange}
            blankIcon={true}
          />
          <View style={styles.inputContainer}>
            <CustomTextInput
              contentContainerStyle={styles.inputNum}
              placeholder="Time"
              value={
                isNaN(ingredient.count) ? '0' : ingredient.count.toString()
              }
              onChangeText={handleCountChange}
            />
            <CustomTextInput
              contentContainerStyle={styles.servingSize}
              inputStyle={styles.servingSizeInput}
              placeholder="Serving Size"
              value={ingredient.servingSize}
              onChangeText={handleServingSizeChange}
              blankIcon={true}
            />
            <MaterialCommunityIcons
              name="bowl-mix"
              size={30}
              color={themeContext?.theme.textColor}
              style={styles.icon}
            />
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default IngredientInput;
