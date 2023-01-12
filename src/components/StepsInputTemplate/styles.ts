import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  heading: {
    fontSize: 20,
    marginBottom: 5,
  },
  addStepIcon: {
    padding: 10,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepsInputContainer: {
    flexDirection: 'row',
  },
  stepNumContainer: {
    position: 'absolute',
    right: 0,
    top: 10,
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputStyleMultilineOverride: {
    height: undefined,
    minHeight: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
