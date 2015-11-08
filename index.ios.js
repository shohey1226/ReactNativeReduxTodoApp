import React from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import App from './app/containers/App';
import todoApp from './app/reducers';

let {
  AppRegistry,
  View
} = React;

let store = createStore(todoApp)
let ReactNativeReduxTodoApp = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
       {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('ReactNativeReduxTodoApp', () => ReactNativeReduxTodoApp);
