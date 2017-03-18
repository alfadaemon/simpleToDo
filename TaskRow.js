import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class TaskRow extends Component{
  render(){
    return(
      <View style = { styles.container } >
        <Text style = { styles.label } >
          {this.props.todo.task}
        </Text>
      </View>
    )
  }
}

TaskRow.propTypes = {
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default TaskRow;