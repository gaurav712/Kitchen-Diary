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
  unitSelector: {
    top: 5,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderWidth: 0.5,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unitSelectorIcon: {
    marginHorizontal: 5,
  },
  unitSelectorText: {
    fontSize: 16,
  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default styles;
