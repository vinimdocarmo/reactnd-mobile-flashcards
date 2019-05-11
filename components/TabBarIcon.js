import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    const IconComponent = getIconComponent(this.props.name)

    return (
      <IconComponent
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

const getIconComponent = (name) => {
  if (name.match('cards')) {
    return MaterialCommunityIcons;
  }
  return Ionicons;
}