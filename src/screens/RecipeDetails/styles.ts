import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default styles;
