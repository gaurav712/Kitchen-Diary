import {useEffect, useState} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import CustomTextInput from '../CustomTextInput';
import SelectPicker from '../SelectPicker';
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
  const selectPickerData = ['Minute(s)', 'Hour(s)'];

  const [numValue, setNumValue] = useState<number>(0.0);
  const [unit, setUnit] = useState<'Hour(s)' | 'Minute(s)' | ''>('');

  const handleNumValueChange = (value: string) => {
    setNumValue(parseFloat(value));
  };

  const handleUnitChange = (value: string) => {
    setUnit(value as typeof unit); // to make TS happy
  };

  useEffect(() => {
    if (numValue && unit) {
      onChangeTime(`${numValue} ${unit}`);
    }
  }, [numValue, unit]);

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
              value={isNaN(numValue) ? '' : numValue.toString()}
              onChangeText={handleNumValueChange}
            />
            <SelectPicker
              data={selectPickerData}
              placeholder="Select Time Unit"
              align="right"
              value={unit}
              onSelect={handleUnitChange}
            />
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
