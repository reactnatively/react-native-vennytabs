//
import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, TouchableOpacity, ActivityIndicator, FlatList, Text, Image, Alert, ScrollView, YellowBox } from 'react-native';

//
//import styles from 'app/views/assets/styles/ux';

class ActionBarImage extends Component {

  render() {

    return (

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity>
          <Image
            source={{uri : 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g'}}
            style={{ width: 30, height: 30, borderRadius: 30/2, marginLeft: 15}}
          />
        </TouchableOpacity>

      </View>

    );

  }

}

class SearchBar extends Component {

  render() {

    return (

      <View style={{flexDirection: 'row'}}>

        <TextInput
          placeholder='Search'
          style={{
            width: '100%',
            //borderColor: this.state.error1 ? '#EC644B' : '#DADFE1',
            marginTop: 6,
            borderWidth: 1,
            borderRadius: 10,
            paddingVertical: 10,
            fontSize: 21,
            color: '#6C7A89',
            textAlign: 'center',
          }}
          returnKeyType={"next"}
          maxLength={30}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#DADFE1'
          autoCapitalize={'none'}
          autoCorrect={false}

        />

      </View>

    );

  }

}

//
export default class DiscoverProfile extends Component {

  //
  static navigationOptions = {

    title: 'Discover - Profile',
    headerLeft : <ActionBarImage />,
    headerRight : <ActionBarImage />,
    headerTitle : <SearchBar />,
    headerStyle: {
      backgroundColor: '#fbfbfb'
    },
    headerTintColor: '#fff',
    headerTitleStyle: { color: 'green' },

  };

  //
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      ActivityIndicator_Loading: false,
      token: 'keys_qABC40UKdvWZN0DVt',
      app: '83838383',
      sender: 'profiler3jM5dM2I',
      author: 'profiler3jM5dM2I',
      profile: 'profilesEYjciIdP',
      viewer: 'profilesEYjciIdP',
      query: 'p',
      category: 'topic',
      more: 'no',
      images: {
        image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      bio: 'This is my headline',
      headline: 'this is my headline',
      access: 2,
      user: 'userDfe3F45giiI',
      name: 'Ralph',
      username: 'naderlyngous',
      posts: 9,
      followers: 10,
      following: 223,
      topics: {
        alpha: 'a',
        beta: 'b',
        gamma: 'c'
      },

    };

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  //
  getItem(id) {

    Alert.alert(id);

  }

  //
  FlatListItemSeparator = () => {

    return (

      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />

    );

  }

  //
  render() {

    return (

      <ScrollView>

        <View style={[styles.wireframe],{ flex: 1, flexDirection: 'row' }}>

          <View style={[styles.wireframe],{flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: this.state.images.image }}
              style={{ width: 100, height: 75 }}
              resizeMode="contain"
            />
          </View>

          <View style={[styles.wireframe],{flex: 3}}>

            <View style={[styles.wireframe],{ flex: 1, flexDirection: 'row', borderWidth: 3, borderColor: 'red' }}>
              <View style={{ flex: 3, flexDirection: 'column', borderWidth: 1, borderColor: 'green' }}>
                <Text style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>801</Text>
                <Text style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>Notes</Text>
              </View>
              <View style={{ flex: 3, flexDirection: 'column', borderWidth: 1, borderColor: 'green' }}>
                <Text style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>189</Text>
                <Text style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>Followers</Text>
              </View>
              <View style={{ flex: 3, flexDirection: 'column', borderWidth: 1, borderColor: 'green' }}>
                <Text style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>134</Text>
                <Text style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>Following</Text>
              </View>
            </View>

            <View style={[styles.wireframe],{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
              <Text>Edit Profile</Text>
            </View>

            <View style={[styles.wireframe],{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
              <Text>@landaredding</Text>
            </View>

          </View>

        </View>

        <View style={[styles.wireframe], { borderWidth: 1, padding: 20, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text>New Notifications</Text>
        </View>

        <View>

          <View style={{ flex: 1, flexDirection: 'row', borderWidth: 5 }}>

            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: 'red', padding: 20 }}>
              <Image style={{ width: 35, height: 35 }} source={{uri: this.state.images.image}} />
            </View>

            <View style={{ flex: 6, flexDirection: 'column', borderWidth: 1, borderColor: 'red', padding: 20 }}>

              <View style={{ flex: 1, borderWidth: 1, borderColor: 'green' }}>
                <Text style={{ borderWidth: 2, borderColor: 'green' }}>PSCI 1350</Text>
                <Text style={{ position: 'absolute', alignSelf: 'flex-end', borderWidth: 2, borderColor: 'green' }}>21 Notes</Text>
              </View>

              <View style={{ flex: 1, borderWidth: 1, borderColor: 'green' }}>
                <Text>Pless Hall</Text>
              </View>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, borderWidth: 1, borderColor: 'green' }}>
                <Text>September 3rd</Text>
                <Text>August 11th</Text>
                <Text>August 1st</Text>
                <Text>February 28th</Text>
                <Text>January 12th</Text>
              </ScrollView>

            </View>

          </View>

        </View>

      </ScrollView>

    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wireframe: {
    borderWidth: 1,
    borderColor: '#ff0000',
  },
});
