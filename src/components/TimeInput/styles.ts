import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputNum: {
    flex: 0.5,
    marginRight: 10,
  },
  inputUnit: {
    flex: 1,
  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default styles;
