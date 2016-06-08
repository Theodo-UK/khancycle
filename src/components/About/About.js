import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from './About.style';
const sadiqImage = require('./sadiq.jpg');

const jsx = () =>
  <View style={styles.container}>
    <ScrollView style={styles.content}>
      <Text style={styles.title}>
        KhanCycle
      </Text>
      <Text style={styles.text}>
        KhanCycle was crafted by Theodo UK using React Native.
      </Text>
      <Text style={styles.title}>
        Acknowledgements
      </Text>
      <Text style={styles.text}>
        Docking station data is retrieved from the CityBikes API (http://api.citybik.es/v2/).
      </Text>
      <Text style={styles.text}>
        Maps functionality is provided by react-native-mapbox-gl copyright (c) 2015, Mapbox.
      </Text>
      <Text style={styles.text}>
        For more information, see: https://github.com/Theodo-UK/khancycle/blob/master/LICENCE.md.
      </Text>
      <Text style={styles.title}>
        Disclaimer
      </Text>
      <Text style={styles.text}>
        KhanCycle is in no way affiliated with Sadiq Khan. However, here is a picture of him
        on a bike. (Image courtesy of London Cycling Campaign.)
      </Text>
      <Image
        style={styles.image}
        source={sadiqImage}
      />
    </ScrollView>
  </View>;

class About extends Component {
  render() {
    return jsx();
  }
}

export default About;
