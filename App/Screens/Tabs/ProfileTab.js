import React, { Component } from 'react';
import {View,Image, KeyboardAvoidingView, Dimensions} from 'react-native';

import {
  Container,
  Icon
} from 'native-base';

import { Button, Block, Text, Input } from '../../components';

const { height } = Dimensions.get('window');

export default class ProfileTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }


  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={height * 0.2}
      >
        <Block center middle>
          <Block middle>
            <Image
              source={require('../../assets/images/Logo.png')}
              style={{ height: 48, width: 202 }}
            />
          </Block>
          <Block flex={2.5} center>
            <Text h3 style={{ marginBottom: 6 }}>
             ProfileTab
            </Text>
           

           
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}
