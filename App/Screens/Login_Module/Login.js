import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, View, ScrollView} from 'react-native';

import { Button, Block, Text, Input } from '../../Components';

const { height } = Dimensions.get('window');

class Login extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;

    return (
<View>
  <ScrollView >

      <Block center middle style={{paddingTop: 50}}>
        <Block middle>
          <Image
            source={require('../../Assets/images/Icons/LogoWithName.png')}
            style={{ height: 148, width: 168 }}
          />
        </Block>
        <Block flex={2.5} center>

         

          <Block center style={{ marginTop: 44 }}>
            <Input
              full
              phone
              label="Phone Number"
              style={{ marginBottom: 25 }}
              Input_Length= {10}
            />
            <Input
              full
              password
              label="Password"
              style={{ marginBottom: 25 }}
             
           
            />


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 55 }}>
              {/* <View style={{ marginRight: 55 }}>

                <Text color="black3"
                  onPress={() => navigation.navigate('OTP')}> Login with OTP </Text>
              </View> */}

              <View>

                <Text color="black3"
                  onPress={() => navigation.navigate('ForgotPassword')}> Forgot Password? </Text>
              </View>

            </View>
            <Button
              full
              style={{  position:'absolute',bottom:0,left:0}}
              onPress={() => navigation.navigate('App')}
            >
              <Text button color="black" >LOGIN</Text>
            </Button>

            {/* <Block center middle>
              <View style={{ marginBottom: 35 }}>

                <Text color="black3" >or login with</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 55 }}>

                <Image
                  source={require('../../Assets/images/Icons/fbLogo.png')}
                  style={{ height: 56, width: 56 }}
                />

                <Image
                  source={require('../../Assets/images/Icons/googleLogo.png')}
                  style={{ height: 56, width: 56 }}
                />



              </View>
              <View >
                <Text paragraph color="gray" >
                  Don't have an account? <Text
                    height={18}
                    color="#00AFEC"
                    onPress={() => navigation.navigate('Sign_Up')}>
                    Sign up
                </Text>
                </Text>
              </View>
            </Block> */}
          </Block>
        </Block>
      </Block>

  </ScrollView>
</View>
    )
  }
}
export default Login;