import React, { Component } from 'react';
import {View,Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import { Button, Block, Text, Input,} from '../../../App/Components/index';



export default class BookingTab extends Component {


  static navigationOptions = {

      // tabBarIcon: ({ tintColor }) => (
      //     <Icon name="ios-home" style={{ color: tintColor }} />
      // )

      header: null
  }


  
  render() {
      return (

         <Block center middle>
         <Text> Booking </Text>
         </Block>

      );
  }
}
