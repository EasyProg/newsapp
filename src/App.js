import React, { Component } from 'react';
import MainCont from './containers/MainCont';
import {Provider} from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import configureStore from './store/index';
const  store =  configureStore();
class  App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
            <MainCont/>
      </div>
      </Provider>
    );
  }
}

export default App;
