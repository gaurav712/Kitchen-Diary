import {useEffect, useState} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import CustomTextInput from '../CustomTextInput';
import styles from './styles';

const TimeInput = ({
  label,
  iconName,
  onChangeTime,
  contentContainerStyle,
}: {
  label: string;
  iconName?: string;
  onChangeTime: (time: string) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}) => {
  const unitValues = ['Minute(s)', 'Hour(s)'];

  const [numValue, setNumValue] = useState<string>('0.0');
  const [unitIndex, setUnitIndex] = useState<number>(0);

  const handleNumValueChange = (value: string) => {
    setNumValue(value);
  };

  const handleUnitIndexChange = (change: number) => {
    if (unitIndex + change > unitValues.length - 1) {
      setUnitIndex(0);
    } else if (unitIndex + change < 0) {
      setUnitIndex(unitValues.length - 1);
    } else {
      setUnitIndex(unitIndex + change);
    }
  };

  useEffect(() => {
    if (numValue) {
      if (isNaN(parseFloat(numValue))) {
        onChangeTime(`0.0 ${unitValues[unitIndex]}`);
        return;
      }
      onChangeTime(`${numValue} ${unitValues[unitIndex]}`);
    }
  }, [numValue, unitIndex]);

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={[styles.container, contentContainerStyle]}>
          <Text style={[styles.label, {color: themeContext?.theme.textColor}]}>
            {label}
          </Text>
          <View style={styles.inputContainer}>
            <CustomTextInput
              contentContainerStyle={styles.inputNum}
              keyboardType={'numeric'}
              placeholder="Time"
              value={numValue.toString()}
              onChangeText={handleNumValueChange}
            />
            <View
              style={[
                styles.unitSelector,
                {borderColor: themeContext?.theme.textColor},
              ]}>
              <MaterialCommunityIcons
                style={styles.unitSelectorIcon}
                name="chevron-left"
                size={25}
                color={themeContext?.theme.textColor}
                onPress={() => handleUnitIndexChange(-1)}
              />
              <Text
                style={[
                  styles.unitSelectorText,
                  {color: themeContext?.theme.textColor},
                ]}>
                {unitValues[unitIndex]}
              </Text>
              <MaterialCommunityIcons
                style={styles.unitSelectorIcon}
                name="chevron-right"
                size={25}
                color={themeContext?.theme.textColor}
                onPress={() => handleUnitIndexChange(+1)}
              />
            </View>
            {iconName ? (
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={themeContext?.theme.textColor}
                style={styles.icon}
              />
            ) : null}
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default TimeInput;
