import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from 'app/views/assets/styles/ux';

export default class BlankScreen extends Component {

  static navigationOptions = {
    title: 'Blank Screen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, there! I'm Venny!</Text>
      </View>
    );
  }
}
