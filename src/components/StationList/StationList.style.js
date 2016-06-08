import { StyleSheet } from 'react-native';

export const maxStations = 5;
const rowHeight = 65;
const separatorHeight = 1;
const totalHeight = maxStations * (rowHeight + separatorHeight);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: totalHeight,
  },
  row: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    height: rowHeight,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  details: {
    flexDirection: 'row',
  },
  separator: {
    height: separatorHeight,
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
