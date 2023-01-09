import {
  KeyboardType,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const CustomTextInput = ({
  placeholder,
  label,
  value,
  onChangeText,
  iconName,
  blankIcon = false,
  align = 'left',
  keyboardType = 'default',
  contentContainerStyle,
  inputStyle,
}: {
  placeholder: string;
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  iconName?: string;
  blankIcon?: boolean;
  align?: 'left' | 'right';
  keyboardType?: KeyboardType;
  contentContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}) => {
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
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                {
                  color: themeContext?.theme.textColor,
                  borderColor: themeContext?.theme.textColor,
                  borderTopLeftRadius: align === 'left' ? 0 : undefined,
                  borderBottomRightRadius: align === 'right' ? 0 : undefined,
                  marginRight: blankIcon ? 40 : undefined,
                },
                styles.input,
                inputStyle,
              ]}
              keyboardType={keyboardType}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
            />
            {!blankIcon && iconName ? (
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
