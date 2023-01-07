import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    marginVertical: 20,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  cardLeft: {
    borderWidth: 0.5,
    width: '47%',
    marginRight: '1.5%',
    marginVertical: 7.5,
    marginLeft: 10,
    borderRadius: 30,
    borderTopLeftRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  cardRight: {
    borderWidth: 0.5,
    width: '47%',
    marginLeft: '1.5%',
    marginVertical: 7.5,
    marginRight: 10,
    borderRadius: 30,
    borderBottomRightRadius: 0,
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
  recipeNameOverlay: {
    position: 'absolute',
    backgroundColor: '#0004',
    width: '100%',
    height: '100%',
    zIndex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeNameText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addRecipeButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});

export default styles;
