import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const helloText = 'Hello!';

class Home extends Component {
  constructor() {
    super();
    this.state = { styles };
  }
  render() {
    return (
      <View style={this.state.styles.container}>
        <Text style={this.state.styles.welcome}>
          {helloText}
        </Text>
      </View>
    );
  }
}

export default Home;
