import {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContextType} from '../../@types/contexts/types';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const SelectPicker = ({
  placeholder,
  data,
  value,
  onSelect,
  contentContainerStyle,
  align = 'left',
}: {
  placeholder: string;
  data: string[];
  value: string;
  onSelect: (option: string) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  align?: 'left' | 'right';
}) => {
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);

  const handlePickerOpen = () => {
    setPickerOpen(true);
  };

  const handleSelectOption = (option: string) => {
    onSelect(option);
    setPickerOpen(false);
  };

  const renderOption = ({
    item,
    themeContext,
  }: {
    item: string;
    themeContext: ThemeContextType | null;
  }) => (
    <Pressable style={styles.option} onPress={() => handleSelectOption(item)}>
      <Text
        style={[
          styles.optionText,
          {color: themeContext?.theme.backgroundColor},
        ]}>
        {item}
      </Text>
    </Pressable>
  );

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View
          style={[
            styles.container,
            {borderColor: themeContext?.theme.textColor},
            {borderTopLeftRadius: align === 'left' ? 0 : undefined},
            {borderBottomRightRadius: align === 'right' ? 0 : undefined},
            contentContainerStyle,
          ]}>
          <Pressable
            style={styles.pressableContainer}
            onPress={handlePickerOpen}>
            <Text
              style={[
                styles.placeholder,
                {
                  color: themeContext?.theme.textColor,
                  opacity: value ? 1 : 0.35,
                },
              ]}
              numberOfLines={1}>
              {value ? value : placeholder}
            </Text>
            <MaterialCommunityIcons
              name="chevron-down"
              color={themeContext?.theme.textColor}
              size={25}
              style={styles.arrowDown}
            />
          </Pressable>
          {pickerOpen && data ? (
            <View
              style={[
                styles.optionsContainer,
                {
                  borderColor: themeContext?.theme.textColor,
                  backgroundColor: themeContext?.theme.textColor,
                  borderTopLeftRadius: align === 'left' ? 0 : undefined,
                  borderBottomRightRadius: align === 'right' ? 0 : undefined,
                },
              ]}>
              <FlatList
                data={data}
                renderItem={({item}) => renderOption({item, themeContext})}
              />
            </View>
          ) : null}
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default SelectPicker;
