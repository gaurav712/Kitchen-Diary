import {useNavigation} from '@react-navigation/native';
import {FAB, SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContextType} from '../../@types/contexts/types';
import {RootNavigationProp} from '../../@types/navigation';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const data = [
    {
      id: '1',
      name: 'Fettuccine',
      imageUri: 'http://localhost:8000/image.jpg',
    },
    {
      id: '2',
      name: 'Crock Pot Chicken',
      imageUri: 'http://localhost:8000/image2.jpg',
    },
    {
      id: '3',
      name: 'Baked Eggs',
      imageUri: 'http://localhost:8000/image3.jpg',
    },
    {
      id: '4',
      name: 'Seared Tuna',
      imageUri: 'http://localhost:8000/image4.jpg',
    },
    {
      id: '5',
      name: 'Filet',
      imageUri: 'http://localhost:8000/image5.jpg',
    },
    {
      id: '6',
      name: 'Chicken Parmesan',
      imageUri: 'http://localhost:8000/image6.jpg',
    },
  ];

  interface IData {
    id: string;
    name: string;
    imageUri: string;
  }

  const handleAddRecipe = () => {
    navigation.navigate('AddRecipe');
  };

  const handleRecipeCardClicked = () => {
    navigation.navigate('RecipeDetails');
  };

  const getCardStyles = (index: number) => {
    if (index == 1) {
      return {...styles.cardRight, ...styles.cardLarge, marginTop: 7.5};
    }
    const rem = index % 4;
    switch (rem) {
      case 0:
        return {...styles.cardLeft, ...styles.cardSmall};
      case 1:
        return {...styles.cardRight, ...styles.cardLarge};
      case 2:
        return {...styles.cardLeft, ...styles.cardLarge, marginTop: -30};
      case 3:
        return {...styles.cardRight, ...styles.cardSmall};
    }
  };

  const renderRecipeCard = ({
    item,
    index,
    themeContext,
  }: {
    item: IData;
    index: number;
    themeContext: ThemeContextType | null;
  }) => (
    <TouchableHighlight
      style={[
        getCardStyles(index),
        {
          shadowColor: themeContext?.theme.textColor,
          borderColor: themeContext?.theme.textColor,
        },
      ]}
      onPress={handleRecipeCardClicked}>
      <>
        <Image
          source={{uri: item.imageUri}}
          style={index % 2 ? styles.recipeImageRight : styles.recipeImageLeft}
        />
        <View
          style={{
            ...styles.recipeNameOverlay,
            borderBottomRightRadius: index % 2 ? 0 : 30,
            borderTopLeftRadius: index % 2 ? 30 : 0,
          }}>
          <Text style={styles.recipeNameText} numberOfLines={3}>
            {item.name}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View
          style={[
            styles.container,
            {backgroundColor: themeContext?.theme.backgroundColor},
          ]}>
          <FlatList
            data={data.filter(item =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item, index}) =>
              renderRecipeCard({item, index, themeContext})
            }
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.header}>
                <Text
                  style={[
                    styles.title,
                    {color: themeContext?.theme.textColor},
                  ]}>
                  {'My\nRecipes'}
                </Text>
                <SearchBar
                  placeholder="Search Here"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  platform={'ios'}
                  containerStyle={{
                    backgroundColor: themeContext?.theme.backgroundColor,
                  }}
                  inputContainerStyle={{
                    backgroundColor: themeContext?.theme.secondaryColor,
                  }}
                  cancelButtonProps={{
                    color: themeContext?.theme.accentSecondary,
                  }}
                />
              </View>
            }
          />
          <FAB
            style={styles.addRecipeButton}
            containerStyle={{
              padding: 5,
              borderRadius: 40,
              backgroundColor: themeContext?.theme.backgroundColor,
            }}
            buttonStyle={{
              backgroundColor: themeContext?.theme.textColor,
              borderRadius: 35,
              height: 70,
              width: 70,
            }}
            icon={
              <MaterialCommunityIcons
                name="chef-hat"
                color={themeContext?.theme.backgroundColor}
                size={25}
              />
            }
            onPress={handleAddRecipe}
          />
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Home;
