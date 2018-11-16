import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksAlreadyScreen extends Component {
  static navigationOptions = {
    title: 'Links Already',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
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
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
