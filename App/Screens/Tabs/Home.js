import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, View } from 'react-native';

import { Button, Block, Text, Input } from '../../Components';

const { height } = Dimensions.get('window');

export default class HomeTab extends Component {


  static navigationOptions = {

      // tabBarIcon: ({ tintColor }) => (
      //     <Icon name="ios-home" style={{ color: tintColor }} />
      // )

      header: null
  }


  
  render() {
      return (

         <View>
           <Text>
             dfjdsfhdsakfuldsakjfhdsfkjdsaf
           </Text>
         </View>

      );
  }
}



