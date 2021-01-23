import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions,View } from 'react-native';

import { Button, Block, Text, Input } from '../../Components';

const { height } = Dimensions.get('window');

class Sign_in extends Component {
    static navigationOptions = {
        header: null
    }
    
  render() {
    const { navigation } = this.props;

    return (
      <Block center middle>
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
              label="Name"
              style={{ marginBottom: 25 }}
            />
             <Input
              full
              email
              label="Email ID"
              style={{ marginBottom: 25 }}
            />
             <Input
              full
              phone
              label="Phone Number"
              style={{ marginBottom: 25 }}
            />
            <Input
              full
              password
              label="Password"
              style={{ marginBottom: 25 }}
           
            />


            
            <Button
              full
              style={{ marginBottom: 12 }}
              onPress={() => navigation.navigate('Home')}
            >
              <Text button color="black" >SIGN UP</Text>
            </Button>

            <Block center middle>
             
            
              <View >
                <Text paragraph color="gray" >
                  Already have an account? <Text
                    height={18}
                    color="#00AFEC"
                    onPress={() => navigation.navigate('Login')}
                    >
                    Login
                </Text>
                </Text>
              </View>
            </Block>


          </Block>
        </Block>
      </Block>
    )
  }
}
export default Sign_in;