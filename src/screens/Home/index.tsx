import {FAB, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const Home = () => {
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

  useEffect(() => {
    if (searchQuery) console.log(searchQuery);
  }, [searchQuery]);

  const handleAddRecipe = () => {
    console.log('Cooking...');
  };

  const getCardStyles = (index: number) => {
    if (index == 1) {
      return {...styles.cardRight, ...styles.cardLarge, marginTop: 10};
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

  const renderRecipeCard = ({item, index}: {item: IData; index: number}) => (
    <View style={getCardStyles(index)}>
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
    </View>
  );

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={renderRecipeCard}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.header}>
                <Text style={styles.title}>{'My\nRecipes'}</Text>
                <SearchBar
                  placeholder="Search Here"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  platform={'ios'}
                />
              </View>
            }
          />
          <FAB
            style={styles.addRecipeButton}
            icon={
              <MaterialCommunityIcons
                name="chef-hat"
                color={'white'}
                size={30}
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
