import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
        <View>
          <Text>Home Stack</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} title="Home Again"><Text>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeAlready')} title="Links"><Text>Home Already</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeAgain')} title="Settings"><Text>Home Again</Text></TouchableOpacity>
        </View>
        <View>
          <Text>Links Stack</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Links')} title="Links Again"><Text>Links</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LinksAlready')} title="Links"><Text>Links Already</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LinksAgain')} title="Settings"><Text>Links Again</Text></TouchableOpacity>
        </View>
        <View>
          <Text>Settings Stack</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} title="Settings Again"><Text>Settings</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsAlready')} title="Settings"><Text>Settings Already</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsAgain')} title="Settings"><Text>Settings Again</Text></TouchableOpacity>
        </View>
        <ExpoConfigView />
      </ScrollView>
    );
  }
}
