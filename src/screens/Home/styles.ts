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
    backgroundColor: 'grey',
    height: 200,
    flex: 0.5,
    margin: 5,
    marginLeft: 10,
    borderRadius: 30,
    borderTopLeftRadius: 0,
  },
  cardRight: {
    backgroundColor: 'grey',
    height: 200,
    flex: 0.5,
    margin: 5,
    marginRight: 10,
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
