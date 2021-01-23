import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home_Route_Tab from '../../App/Navigation/Home_Route_Tab'
import About from '../../App/Screens/About'


import { Theme } from '../../App/Constants/theme'


import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';



const App_Routes = createStackNavigator({
  Home: {
    screen: Home_Route_Tab, navigationOptions: ({ navigation }) => ({
      header: null
    })
  },

  // About: {
  //   screen: About, navigationOptions: ({ navigation }) => ({
  //     header: null
  //   })
  // },

});
// AppTop = createAppContainer(Auth_Stack);

export default App_Routes;


