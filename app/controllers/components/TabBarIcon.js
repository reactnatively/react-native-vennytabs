import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from 'app/models/constants/Colors';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
