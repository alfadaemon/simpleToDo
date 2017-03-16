import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class simpleToDo extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to Simple ToDo App!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Project', () => simpleToDo);
