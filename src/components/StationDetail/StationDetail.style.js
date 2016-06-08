import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 100,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  brokenDetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  reportBrokenBikes: {
    marginTop: 10,
  },
  detailLabel: {
    color: '#7f7f7f',
    fontSize: 18,
  },
  detailNumber: {
    color: '#000000',
    fontSize: 18,
  },
});

export default styles;
