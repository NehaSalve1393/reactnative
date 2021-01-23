import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button, Icon } from '../../../Components/index'
import { ScrollView } from 'react-native-gesture-handler';
import Dash from 'react-native-dash';

export class PastBooking extends Component {
    static navigationOptions = {
        
        header: null,
      };
      render() {
        return (
            <View>
                <ScrollView>
                    <View>
                    <View style={{ padding : 25 }}>
                        <Text style={{ color: '#cfcfcf' }}>AUG 17, 2019</Text>
                        <View style={{ alignContent: 'center', paddingLeft: 15 }}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <View style={{ alignContent: 'center', alignSelf: 'center', alignItems: 'center', padding: 20 }}>
                                    <Image
                                        source={require('../../../../App/Assets/images/Icons/twoWheeler.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}> White- Honda Activa 4G </Text>
                                    <Text style={{ color: '#cfcfcf' }} > MH 12 DE 1433 </Text>
                                    <Text style={{ fontSize: 19 }}>Eco Wash - Basic </Text>
                                </View>

                            </View>


                            <View style={{justifyContent : 'center', alignContent : 'center', alignContent: 'center'}}>
                            <Dash style={{width:300, height:1, alignSelf: 'center'}}/>
                                <Text style={{ fontSize: 19, }}> Customer Name </Text>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }}>

                                    <Text style={{ alignSelf: 'center', }}> Green Promise Appartments,</Text>


                                    <View style={{ padding: 5, justifyContent: 'space-between' }}>

                                        <Image
                                            source={require('../../../../App/Assets/images/Icons/MAP.png')}
                                            style={{ width: 40, height: 40, }} />

                                    </View>
                                </View>

                            </View>
                            <Text> Parking Number - A20 </Text>
                                <Text> Parking Number - A20 </Text>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between',paddingTop : 15 }}>

                            <Text style={{color : "#30B724" , paddingBottom : 10, justifyContent:'center'}}>Internal Cleaning Request*</Text>
                                <Image
                                    source={require('../../../../App/Assets/images/Icons/noVehical.png')}
                                    style={{ width: 120, height: 30, }} />


                            </View>
                        </View>


                        <View style={{ alignContent: 'center', paddingLeft: 15,paddingTop: 15 }}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <View style={{ alignContent: 'center', alignSelf: 'center', alignItems: 'center', padding: 20 }}>
                                    <Image
                                        source={require('../../../../App/Assets/images/Icons/twoWheeler.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}> White- Honda Activa 4G </Text>
                                    <Text style={{ color: '#cfcfcf' }} > MH 12 DE 1433 </Text>
                                    <Text style={{ fontSize: 19 }}>Eco Wash - Basic </Text>
                                </View>

                            </View>


                            <View style={{justifyContent : 'center', alignContent : 'center', alignContent: 'center'}}>
                            <Dash style={{width:300, height:1, alignSelf: 'center'}}/>
                                <Text style={{ fontSize: 19, }}> Customer Name </Text>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }}>

                                    <Text style={{ alignSelf: 'center', }}> Green Promise Appartments,</Text>


                                    <View style={{ padding: 5, justifyContent: 'space-between' }}>

                                        <Image
                                            source={require('../../../../App/Assets/images/Icons/MAP.png')}
                                            style={{ width: 40, height: 40, }} />

                                    </View>
                                </View>

                            </View>
                            <Text> Parking Number - A20 </Text>
                                <Text> Parking Number - A20 </Text>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between',paddingTop : 15 }}>

                            <Text style={{color : "#30B724" , paddingBottom : 10, justifyContent:'center'}}>Internal Cleaning Request*</Text>
                                <Image
                                    source={require('../../../../App/Assets/images/Icons/noVehical.png')}
                                    style={{ width: 120, height: 30, }} />


                            </View>
                        </View>
                    </View>



                    <View style={{ padding : 25 }}>
                        <Text style={{ color: '#cfcfcf' }}>AUG 17, 2019</Text>
                        <View style={{ alignContent: 'center', paddingLeft: 15 }}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <View style={{ alignContent: 'center', alignSelf: 'center', alignItems: 'center', padding: 20 }}>
                                    <Image
                                        source={require('../../../../App/Assets/images/Icons/twoWheeler.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}> White- Honda Activa 4G </Text>
                                    <Text style={{ color: '#cfcfcf' }} > MH 12 DE 1433 </Text>
                                    <Text style={{ fontSize: 19 }}>Eco Wash - Basic </Text>
                                </View>

                            </View>


                            <View style={{justifyContent : 'center', alignContent : 'center', alignContent: 'center'}}>
                            <Dash style={{width:300, height:1, alignSelf: 'center'}}/>
                                <Text style={{ fontSize: 19, }}> Customer Name </Text>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }}>

                                    <Text style={{ alignSelf: 'center', }}> Green Promise Appartments,</Text>


                                    <View style={{ padding: 5, justifyContent: 'space-between' }}>

                                        <Image
                                            source={require('../../../../App/Assets/images/Icons/MAP.png')}
                                            style={{ width: 40, height: 40, }} />

                                    </View>
                                </View>

                            </View>
                            <Text> Parking Number - A20 </Text>
                                <Text> Parking Number - A20 </Text>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between',paddingTop : 15 }}>

                            <Text style={{color : "#30B724" , paddingBottom : 10, justifyContent:'center'}}>Internal Cleaning Request*</Text>
                                <Image
                                    source={require('../../../../App/Assets/images/Icons/noVehical.png')}
                                    style={{ width: 120, height: 30, }} />


                            </View>
                        </View>
                    </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default PastBooking
