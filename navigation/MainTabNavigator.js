import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import HomeAlreadyScreen from '../screens/HomeAlreadyScreen';
import HomeAgainScreen from '../screens/HomeAgainScreen';

import LinksScreen from '../screens/LinksScreen';
import LinksAlreadyScreen from '../screens/LinksAlreadyScreen';
import LinksAgainScreen from '../screens/LinksAgainScreen';

import SettingsScreen from '../screens/SettingsScreen';
import SettingsAlreadyScreen from '../screens/SettingsAlreadyScreen';
import SettingsAgainScreen from '../screens/SettingsAgainScreen';

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
