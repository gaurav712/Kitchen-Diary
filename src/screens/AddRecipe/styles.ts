import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerControls: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  recipeForm: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formField: {
    marginVertical: 10,
  },
  addRecipeImage: {
    marginTop: 90,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 30,
    height: 225,
    borderTopLeftRadius: 0,
    width: width - 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageIconContainer: {
    borderRadius: 20,
    padding: 15,
    borderWidth: 0.5,
  },
  addImagePlusIcon: {
    position: 'absolute',
    right: -20,
    top: -20,
    padding: 5,
    borderRadius: 30,
  },
});

export default styles;
