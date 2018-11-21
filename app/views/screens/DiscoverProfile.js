//
import React, { Component } from 'react';
import { StyleSheet, Platform, View, TouchableOpacity, ActivityIndicator, FlatList, Text, Image, Alert, ScrollView, YellowBox } from 'react-native';

//
import styles from 'app/views/assets/styles/ux';

//
export default class DiscoverProfile extends Component {

  //
  static navigationOptions = {

    title: 'Discover - Profile',

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

    }

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
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />

    );

  }

  //
  render() {

    return (

      <ScrollView>

        <View style={[styles.wireframe]}>

          <View>
            <Image source={{ uri: this.state.images.image }} style={[styles.wireframe],{width:100,height:75}} resizeMode="contain" />
          </View>

          <View>

            <View>
              <Text>189 Notes</Text>
              <Text>34 Followers</Text>
              <Text>12 Following</Text>
            </View>

            <View>
              <Text>Edit Profile</Text>
            </View>

            <View>
              <Text>@landaredding</Text>
            </View>

          </View>

        </View>

        <View>
          <Text>New Notifications</Text>
        </View>

        <View>

          <View>
            <Image style={{ width: 35, height: 35 }} source={{uri: this.state.images.image}} />
          </View>

          <View>

            <View>
              <Text>PSCI 1350</Text>
              <Text>21 Notes</Text>
            </View>

            <View>
              <Text>Pless Hall</Text>
            </View>

            <View>
              <Text>September 3rd</Text>
              <Text>August 11th</Text>
              <Text>August 31st</Text>
            </View>

          </View>

        </View>

      </ScrollView>

    );

  }

}
