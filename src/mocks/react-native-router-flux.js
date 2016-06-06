const mock = { Actions: { refresh: () => {} } };
// the cache key that real react native would get
const key = require.resolve('react-native-router-flux');

// make sure the cache is filled with our lib
require.cache[key] = {
  id: key,
  filename: key,
  loaded: true,
  exports: mock,
};
