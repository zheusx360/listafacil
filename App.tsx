import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NewList } from './src/pages/NewList' 

const App = () => {

  LogBox.ignoreAllLogs()
  StatusBar.setHidden(true)

  return (
    <NewList/>
  );
};

export default App;
