

import React from 'react';
import Routes from './App/Navigation/Route';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
 

  return (
   <Routes/>
  );
};



export default App;
