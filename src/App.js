import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {Header} from './components/common';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import  Router  from  './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBPSsJ_qAVHBG5Kbb4np-L6d98d6NmVdW8",
      authDomain: "manager1-c9e9a.firebaseapp.com",
      databaseURL: "https://manager1-c9e9a.firebaseio.com",
      projectId: "manager1-c9e9a",
      storageBucket: "",
      messagingSenderId: "577837764725"
    };
    firebase.initializeApp(config);

  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
