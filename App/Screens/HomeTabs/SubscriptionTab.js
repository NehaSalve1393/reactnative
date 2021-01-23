import React, { Component } from 'react';
import {View,Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import { Button, Block, Text, Input,} from '../../../App/Components/index';




const { height } = Dimensions.get('window');

export default class SubscriptionTab extends Component {


  static navigationOptions = {

      // tabBarIcon: ({ tintColor }) => (
      //     <Icon name="ios-home" style={{ color: tintColor }} />
      // )

      header: null
  }


  
  render() {
    return (

      <Block center middle>
      <Text> Subscription </Text>
      </Block>

   );

  }
}
