import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import TaskRow from './TaskRow';

class TaskList extends Component{
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    
    this.state = {
      dataSource : ds.cloneWithRows(props.todos)
    };
  }
  
  renderRow(todo){
    return(
      <TaskRow todo={todo} />
    );
  }
  
  render() {
    return (
      <View style = { styles.container } >
        <ListView
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this.renderRow.bind(this)}
        />
        <TouchableHighlight 
          onPress = {this.props.onAddStarted}
          style = {styles.button} >
          <Text style = {styles.buttonLabel} >Add One</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskList.propTypes = {
  onAddStarted: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderWidth: 2,
    borderColor: '#05A5D1',
    height: 60,
    justifyContent: 'center',
    margin: 40,
    marginTop: 20,
  },
  buttonLabel: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default TaskList;