import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, View } from 'react-native';

import { Button, Block, Text, Input, } from '../../Components';

const { height } = Dimensions.get('window');

class SubmitOTP extends Component {


    render() {
        const { navigation } = this.props;

        return (

            <Block center middle>
                <Block middle center>
                    <Text style={{ marginLeft: 35, marginRight: 55 }}>Please enter the 4-digit code sent to you on 70833 33333</Text>
                </Block>
                <Block flex={2.5} center>

                    <Block center style={{ marginTop: 44 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Input
                                phone
                                style={{ marginBottom: 25, width: 42, marginRight: 20 }} 
                                Input_Length= {1}
                                />

                            <Input
                                phone
                                style={{ marginBottom: 25, width: 42, marginRight: 20 }} 
                                Input_Length= {1}
                                />

                            <Input
                                phone
                                style={{ marginBottom: 25, width: 42, marginRight: 20 }} 
                                Input_Length= {1}
                                />

                            <Input
                                phone
                                style={{ marginBottom: 25, width: 42, marginRight: 20 }}
                                Input_Length= {1} />

                        </View>

                        <Text paragraph color="gray" >
                            I haven’t received a code. <Text
                                height={18}
                                color="#00AFEC"
                            >
                                Resend.
                </Text>
                        </Text>

                    </Block>
                    <Button
                        full
                        style={{ marginBottom: 12 }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text button color="black">NEXT</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}
export default SubmitOTP;