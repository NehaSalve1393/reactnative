import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions } from 'react-native';

import { Button, Block, Text, Input } from '../../Components';

const { height } = Dimensions.get('window');

class ChangePassword extends Component {
  
    
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
              source={require('../../Assets/images/Icons/LogoWithName.png')}
              style={{ height: 48, width: 202 }}
            />
          </Block>
          <Block flex={2.5} center>
            <Text h3 style={{ marginBottom: 6 }}>
              Change Password
            </Text>
            <Text paragraph color="black3">
              Please enter your credentials to proceed.
            </Text>
            <Block center style={{ marginTop: 44 }}>
              <Input
                full
                email
                label="Enter New Password"
                style={{ marginBottom: 25 }}
              />

              <Input
                full
                email
                label="Confirm New Password"
                style={{ marginBottom: 25 }}
              />
             

              <Button
                full
                style={{ marginBottom: 12 }}
                onPress={() => navigation.navigate('Login')}
              >
                <Text button>Set Password</Text>
              </Button>
             
            
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}
export default ChangePassword;