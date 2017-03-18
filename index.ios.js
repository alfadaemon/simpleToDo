import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import TaskList from './TaskList'

class simpleToDo extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      todos: [
        { task: 'Example task' },
        { task: 'Another sample task' },
        { task: 'Another sample task' },
        { task: 'Last sample task' }
      ]
    };
  }
  
  onAddStarted(){
    console.log('on add started.')
  }
  
  render() {
    return (
      <View>
        <TaskList 
          onAddStarted = {this.onAddStarted.bind(this)}
          todos = {this.state.todos}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Project', () => simpleToDo);
