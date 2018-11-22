//
import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';

//
export default class PrepareTopic extends Component {

  //
  static navigationOptions = {

    title: 'Prepare - Topic',

  };

  //
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      ActivityIndicator_Loading: false,
      token: 'keys_qABC40UKdvWZN0DVt',
      author: 'profiler3jM5dM2I',
      id: '',
      text: '',
      stage: '',
      topic: '',
      place: '',
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
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />

    );

  }

  //
  getPosts = () => {

    var api = 'http://test.api.venny.io/v3/posts' +
    '?' + 'token' + '=' + this.state.token +
    '&' + 'author' + '=' + this.state.author +
    '&' + 'id' + '=' + this.state.id +
    '&' + 'text' + '=' + this.state.text +
    '&' + 'stage' + '=' + this.state.stage +
    '&' + 'topic' + '=' + this.state.topic +
    '&' + 'place' + '=' + this.state.place +
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

    this.getPosts();

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

          data={ this.state.dataSource.results.posts }

          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) =>

            <View>

              <Text onPress={this.getItem.bind(this, item.id)}>{item.id}</Text>
              <Text>{item.images}</Text>
              <Text>{item.detail}</Text>
              <Text>{item.author_closed}</Text>
              <Text>{item.deleted}</Text>
              <Text>{item.access}</Text>
              <Text>{item.stage}</Text>
              <Text>{item.latitude}</Text>
              <Text>{item.longitude}</Text>
              <Text>{item.altitude}</Text>
              <Text>{item.topic}</Text>
              <Text>{item.place}</Text>
              <Text>{item.host}</Text>
              <Text>{item.author}</Text>
              <Text>{item.timestamp}</Text>
              <Text>{item.active}</Text>
              <Text>{item.app}</Text>

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
