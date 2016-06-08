import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  content: {
    flex: 1,
    marginTop: 64,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: 250,
  },
});

export default styles;
