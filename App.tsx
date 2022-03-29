import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './App/Navigation';
import Store from './App/Redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <MainApp />
    </Provider>
  );
};

export default App;
