import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from 'app/controllers/components/TabBarIcon';

import WelcomeLogin from 'app/views/screens/WelcomeLogin';
import WelcomeRegister from 'app/views/screens/WelcomeRegister';
//import WelcomeHello from 'app/views/screens/WelcomeHello';
//import WelcomeSignUp from 'app/views/screens/WelcomeSignUp';
//import WelcomeSignIn from 'app/views/screens/WelcomeSignIn';
//import WelcomeForgotPassword from 'app/views/screens/WelcomeForgotPassword';
//import WelcomeEnterCode from 'app/views/screens/WelcomeEnterCode';
//import WelcomeResetPassword from 'app/views/screens/WelcomeResetPassword';

const WelcomeStack = createStackNavigator({
  Login: WelcomeLogin,
  Register: WelcomeRegister,
  //Hello: WelcomeHello,
  //SignUp: WelcomeSignUp,
  //SignIn: WelcomeSignIn,
  //ForgotPassword: WelcomeForgotPassword,
  //EnterCode: WelcomeEnterCode,
  //ResetPassword: WelcomeResetPassword,
}, {
  initialRouteName: 'Register',
  headerMode: 'none'
});

WelcomeStack.navigationOptions = { tabBarLabel: 'Welcome', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}/>),};

//
export default createBottomTabNavigator({
  WelcomeStack,
});
