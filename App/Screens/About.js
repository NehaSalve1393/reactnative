import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, View, } from 'react-native';

import { Button, Block, Text, Input } from '../../App/Components';

const { height } = Dimensions.get('window');

class About extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;

    return (

      <Block center middle>
       
        <Block  center>
          <Block center style={{ marginTop: 44 }}>
          <Block middle>
         <Text center h3> CARCURO APP</Text>
         <Text center > Version 1.0.0</Text>
        </Block>
          <Image
            source={require('../../App/Assets/images/Icons/LogoWithName.png')}
            style={{ height: 148, width: 168 }}
          />
            <Block center middle>
              <View >
                <Text paragraph style={{textDecorationLine: 'underline',}}
                    onPress={() => navigation.navigate('FAQ_Page')}>
                  Terms & Conditions
                  
                </Text>
           
              </View>
            </Block>
          </Block>
        </Block>
      </Block>

    )
  }
}
export default About;