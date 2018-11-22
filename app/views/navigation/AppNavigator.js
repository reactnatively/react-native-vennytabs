//
import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

//
import Loading from 'app/views/screens/Loading';
import WelcomeTabNavigator from 'app/views/navigation/WelcomeTabNavigator';
import ExperienceTabNavigator from 'app/views/navigation/ExperienceTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Loading: LoadingTabNavigator,
  Loading: { screen: Loading },
  Welcome: WelcomeTabNavigator,
  Experience: ExperienceTabNavigator,
}, {

  initialRouteName: 'Loading',
  headerMode: 'none',

});
