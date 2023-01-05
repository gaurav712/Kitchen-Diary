import {FAB, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const data = [
    {
      title: 'Hello',
    },
    {
      title: 'Hello',
    },
    {
      title: 'Hello',
    },
    {
      title: 'Hello',
    },
    {
      title: 'Hello',
    },
    {
      title: 'Hello',
    },
  ];

  interface IData {
    title: string;
  }

  useEffect(() => {
    if (searchQuery) console.log(searchQuery);
  }, [searchQuery]);

  const handleAddRecipe = () => {
    console.log('Cooking...');
  };

  const renderRecipeCard = ({item, index}: {item: IData; index: number}) => (
    <View style={index % 2 ? styles.cardRight : styles.cardLeft}>
      <Text>{''}</Text>
    </View>
  );

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <View style={styles.container}>
          <FlatList
            data={data}
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
