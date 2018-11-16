import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from 'assets/styles/ux';

export default class BlankScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
