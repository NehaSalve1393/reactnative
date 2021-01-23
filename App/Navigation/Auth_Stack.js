import React, { Component } from 'react';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from '../../App/Screens/Login_Module/Login'
import ForgotPassword from '../../App/Screens/Login_Module/ForgotPassword'
import ChangePassword from '../../App/Screens/Login_Module/ChangePassword'
import OTP from '../../App/Screens/Login_Module/OTP'
import Sign_Up from '../../App/Screens/Login_Module/Sign_Up'
import SubmitOTP from '../../App/Screens/Login_Module/SubmitOTP'

import { Theme } from '../../App/Constants/theme'

import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';



const Auth_Stack = createStackNavigator({
  Login: {
    screen: Login, navigationOptions: ({ navigation }) => ({
      header: null
    })
  },

  ForgotPassword: {
    screen: ForgotPassword, 
    // navigationOptions: ({ navigation }) => ({
    //   header: null
    // })
  },



  ChangePassword: {
    screen: ChangePassword, navigationOptions: ({ navigation }) => ({
      header: null
    })
  },

  OTP: {
    screen: OTP,
    //  navigationOptions: ({ navigation }) => ({
    //   header: null
    // })
  },


  Sign_Up: {
    screen: Sign_Up,
     navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  
  SubmitOTP: {
    screen: SubmitOTP,
    //  navigationOptions: ({ navigation }) => ({
    //   header: null
    // })
  },




});
// AppTop = createAppContainer(Auth_Stack);

export default Auth_Stack;


