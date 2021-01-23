
import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, FlatList, Dimensions, View, ScrollView, CheckBox, TouchableHighlight } from 'react-native';
import { Button, Block, Text, Input, } from '../../App/Components/index'

import { DrawerActions } from 'react-navigation-drawer';


import { Container, Header, Content, Center, Left, Body, Right, Title, Subtitle, Card, CardItem, Item, Tab, Icon, Form, } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';



const data = [
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something two"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something three"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something four"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something five"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something six"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something sixfc"
    }
];



export default class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {

            data: data
        };
    }

    static navigationOptions = {
        title: 'Notifications',
    };

    render() {


        return (

            <View>
                <ScrollView  >
                    <View>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <Card style={{ borderRadius: 15 }}
                                        title={null}
                                        image={{ uri: rowData.imageUrl }} >
                                        <CardItem>

                                            <Text style={{ color: 'gray' }}> 13 AUG 2019 </Text>
                                        </CardItem>
                                        <CardItem  style ={{ backgroundColor : '#F0FBFF'}}>

                                            <View style={{ flexDirection: 'row', alignContent: 'center', alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                                                <View style={{ flexDirection: 'row', flex: 1 }}>


                                                    <View style={{ padding: 5 }}>
                                                        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent.</Text>
                                                    </View>
                                                </View>

                                                <View style={{ justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', padding: 10 }}>
                                                    <Text style={{ textAlign: 'right', }}> 11.26 am</Text>
                                                </View>

                                            </View>


                                        </CardItem>

                                        <CardItem >

                                            <View style={{ flexDirection: 'row', alignContent: 'center', alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                                                <View style={{ flexDirection: 'row', flex: 1 }}>


                                                    <View style={{ padding: 5 }}>
                                                        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent.</Text>
                                                    </View>
                                                </View>

                                                <View style={{ justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', padding: 10,  }}>
                                                    <Text style={{ textAlign: 'right', }}> 11.26 am</Text>
                                                </View>

                                            </View>


                                        </CardItem>

                                        <CardItem >

                                            <View style={{ flexDirection: 'row', alignContent: 'center', alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                                                <View style={{ flexDirection: 'row', flex: 1 }}>


                                                    <View style={{ padding: 5 }}>
                                                        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent.</Text>
                                                    </View>
                                                </View>

                                                <View style={{ justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', padding: 10 }}>
                                                    <Text style={{ textAlign: 'right', }}> 11.26 am</Text>
                                                </View>

                                            </View>


                                        </CardItem>


                                        {/* <Text style={{ marginBottom: 0 }}>
                      {rowData.title}
                    </Text> */}

                                    </Card>
                                );
                            }}
                            keyExtractor={(item, index) => index}
                        />

                    </View>


                </ScrollView>

            </View>

        );
    }
}
