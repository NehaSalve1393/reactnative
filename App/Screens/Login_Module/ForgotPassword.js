import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, Alert } from 'react-native';

import { Button, Block, Text, Input } from '../../Components';

const { height } = Dimensions.get('window');

class ForgotPassword extends Component {
  
    
  render() {
    const { navigation } = this.props;

    const showAlert = () =>{
      Alert.alert(
         'Please check email'
      )
    }

    return (
     
      
        <Block center middle>
          <Block middle>
            {/* <Image
              source={require('../../Assets/images/Icons/LogoWithName.png')}
              style={{ height: 48, width: 202 }}
            /> */}
          </Block>
          <Block flex={2.5}  middle>
            <Text h3 style={{ marginBottom: 6 }}>
            Forget Password?
            </Text>
            <Text paragraph color="black">
              Please enter your credentials to proceed.
            </Text>
            <Block center style={{ marginTop: 44 }}>
              <Input
                full
                email
                label="Email"
               
              />
              <Text paragraph color="black">
              An email will be sent to reset your password.
            </Text>

            
            </Block>
              <Button
                full
                style={{ marginBottom: 12 }}
                // onPress={showAlert}
              >
                <Text button color="black3">NEXT</Text>
              </Button>
             
          </Block>
        </Block>
    )
  }
}
export default ForgotPassword;