import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import Routes from './src/routes';
import { Home } from './src/pages/Home';

const App = () => {

  LogBox.ignoreAllLogs()
  StatusBar.setHidden(true)

  return (
    <Routes/>
  );
};

export default App;
