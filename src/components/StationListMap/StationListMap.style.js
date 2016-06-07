import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
});

export default styles;
