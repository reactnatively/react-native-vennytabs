//
import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';

//
export default class Notifications extends Component {

  //
  static navigationOptions = {

    title: 'Notifications',

  };

  //
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      ActivityIndicator_Loading: false,
      token: 'keys_qABC40UKdvWZN0DVt',
      recipient: 'profileGBsQ5RnSR',
      app: '83838383',

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
          height: 0.5,
          width: '100%',
          backgroundColor: '#000000',
        }}
      />

    );

  }

  //
  getNotifications = () => {

    var api = 'http://test.api.venny.io/v3/notifications' +
    '?' + 'token' + '=' + this.state.token +
    '&' + 'recipient' + '=' + this.state.recipient +
    '&' + 'app' + '=' + this.state.app;

    console.log(api);

    return fetch(api, { method: 'GET' })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  //
  componentDidMount() {

    this.getNotifications();

  }

  //
  render() {

    if (this.state.isLoading) {

      return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

           <ActivityIndicator size="large" />

        </View>

      );

    }

    return (

      <View style={styles.MainContainer}>

        <FlatList

          data={ this.state.dataSource.results.notifications }

          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) =>

            <View>

              <Text onPress={this.getItem.bind(this, item.id)}>{item.id}</Text>
              <Text>{item.subject}</Text>
              <Text>{item.body}</Text>
              <Text>{item.type}</Text>
              <Text>{item.opened}</Text>
              <Text>{item.viewed}</Text>
              <Text>{item.object}</Text>
              <Text>{item.recipient}</Text>
              <Text>{item.sender}</Text>

            </View>

          }

          keyExtractor={(item, index) => index.toString()}

        />

      </View>

    );

  }

}

//
const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,

  },

  imageView: {

    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7

  },

  textView: {

    width:'50%',
    textAlignVertical:'center',
    padding:10,
    color: '#000'

  }

});
