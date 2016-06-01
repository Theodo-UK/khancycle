import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  listView: {
    borderTopWidth: (Platform.OS === 'ios') ? 20 : 0,
    borderTopColor: '#999999',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  text: {
    flex: 1,
  },
});

export default styles;
