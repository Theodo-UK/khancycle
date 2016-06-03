import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  row: {
    backgroundColor: '#F6F6F6',
    padding: 10,
  },
  details: {
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  stationName: {
    color: '#4f4c4c',
  },
  stationDistance: {
    color: '#666666',
    marginRight: 30,
    fontSize: 14,
  },
  stationDetails: {
    color: '#7f7f7f',
    marginRight: 30,
    fontSize: 12,
  },
});

export default styles;
