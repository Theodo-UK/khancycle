import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listView: {
    // Border is temporary -- should eventually be replaced by navigation bar
    borderTopWidth: 20,
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
