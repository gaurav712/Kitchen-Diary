import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientNameInput: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputNum: {
    flex: 0.42,
    marginRight: 10,
  },
  servingSize: {
    flex: 1,
  },
  servingSizeInput: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: -15,
    alignSelf: 'center',
  },
});

export default styles;
