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

const HomeStack = createStackNavigator({ Home: HomeScreen, HomeAgain: HomeAgainScreen, HomeAlready: HomeAlreadyScreen, });
HomeStack.navigationOptions = { tabBarLabel: 'Home', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const LinksStack = createStackNavigator({ Links: LinksScreen, LinksAgain: LinksAgainScreen, LinksAlready: LinksAlreadyScreen, });
LinksStack.navigationOptions = { tabBarLabel: 'Links', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

const SettingsStack = createStackNavigator({ Settings: SettingsScreen, SettingsAgain: SettingsAgainScreen, SettingsAlready: SettingsAlreadyScreen, });
SettingsStack.navigationOptions = { tabBarLabel: 'Settings', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

//
export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
