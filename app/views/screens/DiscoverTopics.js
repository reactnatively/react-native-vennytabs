//
import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';

//
export default class DiscoverTopics extends Component {

  //
  static navigationOptions = {

    title: 'Discover - Topics',

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
      query: 'p',
      category: 'topic',
      more: 'no',

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
  getSearch = () => {

    var api = 'http://test.api.venny.io/v3/search' +
    '?' + 'token' + '=' + this.state.token +
    '&' + 'app' + '=' + this.state.app +
    '&' + 'sender' + '=' + this.state.sender +
    '&' + 'query' + '=' + this.state.query +
    '&' + 'more' + '=' + this.state.more;

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
  getCategories = () => {

    var api = 'http://test.api.venny.io/v3/categories' +
    '?' + 'token' + '=' + this.state.token +
    '&' + 'app' + '=' + this.state.app +
    '&' + 'category' + '=' + this.state.category +
    '&' + 'author' + '=' + this.state.author;

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

    this.getCategories();

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

          data={ this.state.dataSource.results }

          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) =>

            <View>

              <Text onPress={this.getItem.bind(this, item.topic)}>{item.topic}</Text>
              <Text>{item.count}</Text>
              <Text>{item.date}</Text>
              <Text>{item.place}</Text>

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
