import React from 'react-native';
// import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux/native'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
// import AddTodo from '../components/AddTodo'
// import TodoList from '../components/TodoList'
// import Footer from '../components/Footer'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ReactNativeReduxTodoApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ReactNativeReduxTodoApp;
