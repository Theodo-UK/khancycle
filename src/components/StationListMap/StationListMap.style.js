import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  container: {
    flex: 1,
  },
});

export default styles;
