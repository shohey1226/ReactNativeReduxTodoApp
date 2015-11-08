import React, { Text, View, PropTypes} from 'react-native';

let Todo = React.createClass({
  render(){
    return(
      <Text
        onPress={this.props.onClick}
        style={{
          textDecorationLine: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </Text>
    );
  }
});

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;
