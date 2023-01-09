import {useState} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import CustomTextInput from '../CustomTextInput';
import styles from './styles';

const IngredientInput = ({
  label,
  contentContainerStyle,
}: {
  label?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}) => {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [numValue, setNumValue] = useState<number>(0);
  const [servingSize, setServingSize] = useState<string>('');

  const handleIngredientNameChange = (name: string) => {
    setIngredientName(name);
  };

  const handleNumValueChange = (value: string) => {
    setNumValue(parseInt(value));
  };

  const handleServingSizeChange = (value: string) => {
    setServingSize(value);
  };

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
            value={ingredientName}
            onChangeText={handleIngredientNameChange}
            blankIcon={true}
          />
          <View style={styles.inputContainer}>
            <CustomTextInput
              contentContainerStyle={styles.inputNum}
              placeholder="Time"
              value={isNaN(numValue) ? '0' : numValue.toString()}
              onChangeText={handleNumValueChange}
            />
            <CustomTextInput
              contentContainerStyle={styles.servingSize}
              inputStyle={styles.servingSizeInput}
              placeholder="Serving Size"
              value={servingSize}
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
