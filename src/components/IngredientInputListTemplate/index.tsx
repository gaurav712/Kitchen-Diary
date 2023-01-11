import {useState} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import IngredientInput from '../IngredientInput';
import styles from './styles';

const IngredientInputListTemplate = ({
  contentContainerStyle,
}: {
  contentContainerStyle?: StyleProp<ViewStyle>;
}) => {
  const [instances, setInstances] = useState<any[]>([...Array(1)]);

  const handleAddPressed = () => {
    setInstances([...instances, ...Array(1)]);
  };

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
