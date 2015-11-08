import React, { Text, View, TextInput} from 'react-native';
var Button = require('react-native-button');

let AddTodo = React.createClass({

  propTypes: {
    onAddClick: React.PropTypes.func.isRequired
  },

  getInitialState(){
    return { text: ""};
  },

  _handlePress(){
    this.props.onAddClick(this.state.text);
    this.setState({text: ""});
  },

  render(){
    return(
      <View>
        <TextInput
          style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button style={{color: 'green'}} onPress={this._handlePress}>
          Add
        </Button>
      </View>
    );
  }
});

export default AddTodo;
