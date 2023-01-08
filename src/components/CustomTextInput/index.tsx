import {Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const CustomTextInput = ({
  placeholder,
  label,
  value,
  onChangeText,
  iconName,
  align = 'left',
}: {
  placeholder: string;
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  iconName?: string;
  align?: 'left' | 'right';
}) => {
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={styles.container}>
          {label ? (
            <Text
              style={[styles.label, {color: themeContext?.theme.textColor}]}>
              {label}
            </Text>
          ) : null}
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                {
                  color: themeContext?.theme.textColor,
                  borderColor: themeContext?.theme.textColor,
                  borderTopLeftRadius: align === 'left' ? 0 : undefined,
                  borderBottomRightRadius: align === 'right' ? 0 : undefined,
                },
              ]}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
            />
            {iconName ? (
              <MaterialCommunityIcons
                style={styles.inputIcon}
                name={iconName}
                size={30}
                color={themeContext?.theme.textColor}
              />
            ) : null}
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default CustomTextInput;
