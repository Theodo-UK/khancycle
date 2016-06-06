import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    borderRadius: 6,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
    borderColor: '#7f7f7f',
    borderWidth: 1,
    borderRadius: 6,
  },
  controlText: {
    color: '#4f4c4c',
    margin: 10,
    textAlignVertical: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
  },
});

export default styles;
