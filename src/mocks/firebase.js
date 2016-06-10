const mockFirebaseApp = {
  initializeApp() {
    return {
      database() {
        return {
          ref() {
            return {};
          },
        };
      },
    };
  },
};
// the cache key that real react native would get
const keyFirebaseApp = require.resolve('firebase/app');

// make sure the cache is filled with our lib
require.cache[keyFirebaseApp] = {
  id: keyFirebaseApp,
  filename: keyFirebaseApp,
  loaded: true,
  exports: mockFirebaseApp,
};

const mockFirebaseDatabase = {

};
const keyFirebaseDatabase = require.resolve('firebase/database');
require.cache[keyFirebaseDatabase] = {
  id: keyFirebaseDatabase,
  filename: keyFirebaseDatabase,
  loaded: true,
  exports: mockFirebaseDatabase,
};
