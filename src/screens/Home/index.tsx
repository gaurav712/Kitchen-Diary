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
      title: '',
      imageUri: 'http://localhost:8000/image.jpg',
    },
    {
      id: '2',
      title: '',
      imageUri: 'http://localhost:8000/image2.jpg',
    },
    {
      id: '3',
      title: '',
      imageUri: 'http://localhost:8000/image3.jpg',
    },
    {
      id: '4',
      title: '',
      imageUri: 'http://localhost:8000/image4.jpg',
    },
    {
      id: '5',
      title: '',
      imageUri: 'http://localhost:8000/image5.jpg',
    },
    {
      id: '6',
      title: '',
      imageUri: 'http://localhost:8000/image6.jpg',
    },
  ];

  interface IData {
    id: string;
    title: string;
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
        return {...styles.cardLeft, ...styles.cardLarge, marginTop: -25};
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
      <Text>{item.title}</Text>
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
