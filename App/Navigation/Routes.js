import React, { Component } from 'react';
import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import {AppRegistry} from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
// import Login from '../../App/Screens/Login_Module/Login';
// import Home from '../../App/Screens/Home';
// import Sign_Up from '../../App/Screens/Login_Module/Sign_Up'
// import FAQ_Page from '../../App/Screens/FAQ_Page'
// import About from '../../App/Screens/About'
// import OTP from '../../App/Screens/Login_Module/OTP'
// import SubmitOTP from '../../App/Screens/Login_Module/SubmitOTP'
// import ForgotPassword from '../../App/Screens/Login_Module/ForgotPassword'
import Loader from '../../App/Components/Loader'
import Auth_Stack from '../../App/Navigation/Auth_Stack'
//import App_Routes from '../../App/Navigation/App_Routes'
import DrawerRoutes from '../../App/Navigation/DrawerRoutes'
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';



class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('user_data');
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };



    render() {
        return (
             <Loader />

        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });


    const SwitchStackNavigator = createSwitchNavigator(
        {
          AuthLoading: AuthLoadingScreen,
      
             Auth: Auth_Stack,
          // App: App_Routes,
          App: DrawerRoutes,
         
        },
        {
          initialRouteName: 'AuthLoading',
        }
      );
      
      // const AppCont = createAppContainer(SwitchStackNavigator);
      const AppCont = createAppContainer(SwitchStackNavigator);
      
      export default AppCont;

