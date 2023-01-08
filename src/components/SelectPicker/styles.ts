import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    borderWidth: 0.5,
    height: 40,
    borderRadius: 10,
  },
  pressableContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  placeholder: {
    fontSize: 16,
  },
  arrowDown: {
    position: 'absolute',
    right: 10,
  },
  optionsContainer: {
    position: 'absolute',
    borderRadius: 15,
    borderWidth: 0.5,
    width: '101%',
    alignSelf: 'center',
    marginTop: -5,
    padding: 10,
  },
  option: {
    height: 30,
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 15,
  },
});

export default styles;
