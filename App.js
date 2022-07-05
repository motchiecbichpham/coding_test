import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';
import MyProvider from './src/provider/MyProvider';
const App = () => {
  return (
    <MyProvider>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </MyProvider>
  );
};
export default App;
