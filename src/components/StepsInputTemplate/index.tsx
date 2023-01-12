import {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IStepsData} from '../../@types/recipe';
import ThemeContext from '../../contexts/ThemeContext';
import CustomTextInput from '../CustomTextInput';
import styles from './styles';

const StepsInputTemplate = ({
  onChange,
}: {
  onChange: (stepsData: IStepsData) => void;
}) => {
  const [instances, setInstances] = useState<any[]>([...Array(1)]);
  const [stepsData, setStepsData] = useState<IStepsData>({0: ''});

  const handleStepsDataChange = (index: number, text: string) => {
    setStepsData({...stepsData, [index]: text});
  };

  const handleAddPressed = () => {
    setInstances([...instances, ...Array(1)]);
  };

  useEffect(() => {
    if (stepsData) onChange(stepsData);
  }, [stepsData]);

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={styles.container}>
          <Text
            style={[styles.heading, {color: themeContext?.theme.textColor}]}>
            Steps
          </Text>
          {stepsData &&
            instances?.map((_, index: number) => (
              <View key={index} style={styles.stepsInputContainer}>
                <CustomTextInput
                  placeholder="What to do"
                  blankIcon={true}
                  value={stepsData[index]}
                  onChangeText={(text: string) =>
                    handleStepsDataChange(index, text)
                  }
                  multiline={true}
                  inputStyle={styles.inputStyleMultilineOverride}
                />
                <View
                  style={[
                    styles.stepNumContainer,
                    {backgroundColor: themeContext?.theme.textColor},
                  ]}>
                  <Text
                    style={[
                      styles.stepNumText,
                      {color: themeContext?.theme.backgroundColor},
                    ]}>
                    {index + 1}
                  </Text>
                </View>
              </View>
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

export default StepsInputTemplate;
