import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: 20,
  },
  title: {
    color: '#000',
    fontSize: 60,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  cardLeft: {
    flex: 0.5,
    margin: 7.5,
    marginLeft: 10,
    borderRadius: 30,
    borderTopLeftRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  cardRight: {
    flex: 0.5,
    margin: 7.5,
    marginRight: 10,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  cardSmall: {
    aspectRatio: 0.9,
  },
  cardLarge: {
    aspectRatio: 0.75,
  },
  recipeImageLeft: {
    height: '100%',
    borderRadius: 30,
    borderTopLeftRadius: 0,
  },
  recipeImageRight: {
    height: '100%',
    borderRadius: 30,
    borderBottomRightRadius: 0,
  },
  addRecipeButton: {
    position: 'absolute',
    bottom: 30,
    right: 25,
  },
});

export default styles;
