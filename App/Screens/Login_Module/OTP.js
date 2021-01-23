import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, View } from 'react-native';

import { Button, Block, Text, Input, } from '../../Components';

const { height } = Dimensions.get('window');

class OTP extends Component {


  render() {
    const { navigation } = this.props;

    return (

      <Block center middle>
        <Block middle center>
          <Text h4>Please enter your mobile number to proceed</Text>
        </Block>
        <Block flex={2.5} center>

          <Block center style={{ marginTop: 44 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 27, marginRight: 10 }}>+91</Text>
              <Input
                full
                phone
                label="Mobile Number"
                style={{ marginBottom: 25, width: 300 }}
                Input_Length= {10}
              />
            </View>

          



          </Block>
              <Button
                full
                style={{ marginBottom: 12 }}
                onPress={() => navigation.navigate('SubmitOTP')}
              >
                <Text button color="black">NEXT</Text>
              </Button>
          
        </Block>
      </Block>
    )
  }
}
export default OTP;