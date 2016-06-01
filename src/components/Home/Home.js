import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Home extends Component {
  render() {
    const helloText = "Hello!"
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {helloText}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home
