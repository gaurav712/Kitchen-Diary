import {useEffect, useState} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IIngredient, IIngredientsData} from '../../@types/recipe';
import ThemeContext from '../../contexts/ThemeContext';
import IngredientInput from '../IngredientInput';
import styles from './styles';

const IngredientInputListTemplate = ({
  onChange,
  contentContainerStyle,
}: {
  onChange: (ingredientsData: IIngredientsData) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}) => {
  const [ingredientsData, setIngredientsData] = useState<IIngredientsData>({});
  const [instances, setInstances] = useState<any[]>([...Array(1)]);

  const handleOnChange = (index: number, ingredient: IIngredient) => {
    setIngredientsData({...ingredientsData, [index]: ingredient});
  };

  const handleAddPressed = () => {
    setInstances([...instances, ...Array(1)]);
  };

  /* Handle change in ingredients */
  useEffect(() => {
    if (ingredientsData) onChange(ingredientsData);
  }, [ingredientsData]);

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={styles.container}>
          <Text
            style={[styles.heading, {color: themeContext?.theme.textColor}]}>
            Ingredients
          </Text>
          {instances?.map((_, index: number) => (
            <IngredientInput
              contentContainerStyle={contentContainerStyle}
              key={index}
              onChange={(ingredient: IIngredient) =>
                handleOnChange(index, ingredient)
              }
            />
          ))}
          <Pressable
            style={[
              styles.addIngredientIcon,
              {
                backgroundColor: themeContext?.theme.textColor,
              },
            ]}
            onPress={handleAddPressed}>
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color={themeContext?.theme.backgroundColor}
            />
          </Pressable>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default IngredientInputListTemplate;
