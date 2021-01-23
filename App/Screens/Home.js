import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions } from 'react-native';

import { Button, Block, Text, Input } from '../../App/Components';

const { height } = Dimensions.get('window');

class Home extends Component {
  
    
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
              source={require('../../App/Assets/images/Icons/LogoWithName.png')}
              style={{ height: 48, width: 202 }}
            />
          </Block>
          <Block flex={2.5} center>
            <Text h3 style={{ marginBottom: 6 }}>
              Enter OTP Password
            </Text>
            <Text paragraph color="black3">
              Please enter your credentials to proceed.
            </Text>
            <Block center style={{ marginTop: 44 }}>
              <Input
                full
                email
                label="Mobile Number"
                style={{ marginBottom: 25 }}
              />
             

              <Button
                full
                style={{ marginBottom: 12 }}
               
              >
                <Text button>Confirm OTP</Text>
              </Button>
             
            
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}
export default Home;