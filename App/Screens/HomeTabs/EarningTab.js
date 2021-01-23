import React, { Component } from 'react';
import {View,Image, KeyboardAvoidingView, Dimensions, TouchableHighlight} from 'react-native';
import { Button, Block, Text, Input,} from '../../Components/index';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, CardItem} from 'native-base'
import {DrawerActions} from 'react-navigation-drawer';




export default class VehicalTab extends Component {


  static navigationOptions = {

      // tabBarIcon: ({ tintColor }) => (
      //     <Icon name="ios-home" style={{ color: tintColor }} />
      // )

      header: null
  }


  
  render() {
    return (

      <View>
 <View style={{alignContent: 'center'}}>
          <Card>
            <CardItem>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View>
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.dispatch(DrawerActions.openDrawer())
                    }>
                    <Image
                      source={require('../../../App/Assets/images/Icons/menu.png')}
                      style={{width: 20, height: 20}}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    CarCuro
                  </Text>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                  <Image
                    source={require('../../../App/Assets/images/Icons/alarm.png')}
                    style={{width: 20, height: 22}}
                  />
                </View>
              </View>
            </CardItem>
          </Card>
        </View>
     
<ScrollView>

<View>
<Card>
<CardItem >

<View style={{ paddingLeft : 25,paddingRight:25,  flex : 1}}>
      <Text style={{color: '#cfcfcf',padding: 10  }}>AUG 2019</Text>

        <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : '#30B724'}}> ₹2500 </Text>

        </View>

        
       <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : '#30B724'}}> ₹2500 </Text>

        </View>


        <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : 'red'}}> ₹2500 </Text>

        </View>


        <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : '#30B724'}}> ₹2500 </Text>

        </View>



      </View>
</CardItem>
</Card>



<Card>
<CardItem >

<View style={{ paddingLeft : 25,paddingRight:25,  flex : 1}}>
      <Text style={{color: '#cfcfcf',padding: 10  }}>AUG 2019</Text>

        <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : '#30B724'}}> ₹2500 </Text>

        </View>

        
       <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : '#30B724'}}> ₹2500 </Text>

        </View>


        <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : 'red'}}> ₹2500 </Text>

        </View>


        <View style={{flexDirection: 'row',  justifyContent: 'space-between',padding : 5}}>
        <View>
          <Text>Payment Pending</Text>
          <Text style={{fontSize : 12, color : 'gray'}}> 23 AUG 2019 </Text>
        </View>
        <Text style={{fontWeight : 'bold', fontSize : 17, color : '#30B724'}}> ₹2500 </Text>

        </View>



      </View>
</CardItem>
</Card>


</View>

</ScrollView>

</View>
   );
  }
}
