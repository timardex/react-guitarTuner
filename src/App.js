import React from 'react';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import store from  './store';

import Header from './components/header';
import Tuner from './components/tuner';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App container">
        <Header />
        <Tuner />
      </div>
    </Provider>
  );
}

export default App;
