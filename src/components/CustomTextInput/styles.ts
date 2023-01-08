import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginTop: 5,
    borderWidth: 0.5,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  inputIcon: {
    marginLeft: 10,
  },
});

export default styles;
