import React, { Component } from 'react';
import { View, } from 'react-native';

import {
    Container,
    Icon
} from 'native-base';


import { Button, Block, Text, Input } from '../../App/Components';

export default class HomeTab extends Component {

    static navigationOptions = {

        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" style={{ color: tintColor }} />
        // )
    }

    render() {
        return (
            <View>
                <Text h3 style={{ marginBottom: 6 }}>
                    Register with Velocity
            </Text>
            </View>


        );
    }

}

