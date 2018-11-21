import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from 'app/controllers/components/TabBarIcon';

import HomeScreen from 'app/views/screens/HomeScreen';
import HomeAlreadyScreen from 'app/views/screens/HomeAlreadyScreen';
import HomeAgainScreen from 'app/views/screens/HomeAgainScreen';

import LinksScreen from 'app/views/screens/LinksScreen';
import LinksAlreadyScreen from 'app/views/screens/LinksAlreadyScreen';
import LinksAgainScreen from 'app/views/screens/LinksAgainScreen';

import SettingsScreen from 'app/views/screens/SettingsScreen';
import SettingsAlreadyScreen from 'app/views/screens/SettingsAlreadyScreen';
import SettingsAgainScreen from 'app/views/screens/SettingsAgainScreen';

import BlankScreen from 'app/views/screens/BlankScreen';

import DiscoverTopics from 'app/views/screens/DiscoverTopics';
import PrepareTopic from 'app/views/screens/PrepareTopic';
import PrepareNote from 'app/views/screens/PrepareNote';
import MessageThreads from 'app/views/screens/MessageThreads';
import MessageThread from 'app/views/screens/MessageThread';
import Notifications from 'app/views/screens/Notifications';
import DiscoverProfile from 'app/views/screens/DiscoverProfile';

const DiscoverStack = createStackNavigator({
  Discover: DiscoverTopics,
});
DiscoverStack.navigationOptions = { tabBarLabel: 'Discover', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const PrepareStack = createStackNavigator({
  Note: PrepareNote,
  Topic: PrepareTopic,
});
PrepareStack.navigationOptions = { tabBarLabel: 'Prepare', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const MessagesStack = createStackNavigator({
  MessageThreads: MessageThreads,
  MessageThread: MessageThread,
});
MessagesStack.navigationOptions = { tabBarLabel: 'Message', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const MessageStack = createStackNavigator({
  MessageThread: MessageThread,
});
MessageStack.navigationOptions = { tabBarLabel: 'Messages', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const NotificationsStack = createStackNavigator({
  Notifications: Notifications,
});
NotificationsStack.navigationOptions = { tabBarLabel: 'Notifications', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const ProfileStack = createStackNavigator({
  DiscoverProfile: DiscoverProfile,
});
ProfileStack.navigationOptions = { tabBarLabel: 'Profile', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

/*
const HomeStack = createStackNavigator({ Home: HomeScreen, HomeAgain: HomeAgainScreen, HomeAlready: HomeAlreadyScreen, });
HomeStack.navigationOptions = { tabBarLabel: 'Home', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const LinksStack = createStackNavigator({ Links: LinksScreen, LinksAgain: LinksAgainScreen, LinksAlready: LinksAlreadyScreen, });
LinksStack.navigationOptions = { tabBarLabel: 'Links', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const SettingsStack = createStackNavigator({ Settings: SettingsScreen, SettingsAgain: SettingsAgainScreen, SettingsAlready: SettingsAlreadyScreen, });
SettingsStack.navigationOptions = { tabBarLabel: 'Settings', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const BlankStack = createStackNavigator({ Blank: BlankScreen });
BlankStack.navigationOptions = { tabBarLabel: 'Blank', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};
*/
//
export default createBottomTabNavigator({
  ProfileStack,
  DiscoverStack,
  PrepareStack,
  MessagesStack,
  MessageStack,
  NotificationsStack,
});
