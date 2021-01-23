import React, {Component} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  FlatList,
  Dimensions,
  View,
  ScrollView,
  CheckBox,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import {Button, Block, Text, Input} from '../../../App/Components/index';
import Dash from 'react-native-dash';

import {DrawerActions} from 'react-navigation-drawer';

import {
  Container,
  Header,
  Content,
  Center,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Card,
  CardItem,
  Item,
  Tab,
  Icon,
  Form,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');

const data = [
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something two',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something three',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something four',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something five',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something six',
  },
];

export default class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  static navigationOptions = {
    // tabBarIcon: ({ tintColor }) => (
    //     <Icon name="ios-home" style={{ color: tintColor }} />
    // )

    header: null,
  };

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
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.dispatch(DrawerActions.openDrawer())
                    }>
                    <Image
                      source={require('../../../App/Assets/images/Icons/menu.png')}
                      style={{width: 20, height: 20}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    CarCuro
                  </Text>
                </View>
                <View style={{justifyContent: 'space-between'}}>


                <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Notifications')
                    }>
                  <Image
                    source={require('../../../App/Assets/images/Icons/alarm.png')}
                    style={{width: 20, height: 22}}
                  />
                  </TouchableOpacity>



                </View>
              </View>
            </CardItem>
          </Card>
        </View>
        <ScrollView>
          <Block>
            <View style={{flex: 1, alignContent: 'center'}}>
              {/* <Card >
                <CardItem>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <View>
                    <TouchableHighlight onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} >

                      <Image source={require('../../../App/Assets/images/Icons/menu.png')} style={{ width: 20, height: 20 }} />
                    </TouchableHighlight>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>CarCuro</Text>

                    </View>
                    <View style={{ justifyContent: 'space-between' }}>
                      <Image source={require('../../../App/Assets/images/Icons/alarm.png')} style={{ width: 20, height: 22 }} />

                    </View>
                  </View>
                </CardItem>
              </Card> */}

              <View
                style={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F2FCFF',
                  height: 150,
                  margin: 25,
                }}>
                <Text style={{fontSize: 16, color: '#707070'}}>
                  {' '}
                  Payment Due From 12 Aug 2019{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#707070',
                    marginTop: 16,
                  }}>
                  {' '}
                  ₹ 2900{' '}
                </Text>
              </View>

              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginLeft: 25, marginRight: 25 }}>
                <Text style={{ fontWeight: "bold", fontSize: 21, color: '#707070' }}>COUPONS</Text>
                <Text style={{ color: '#707070' }}> SEE MORE</Text>
              </View> */}
            </View>
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Text style={{fontSize: 16, color: '#707070'}}>
                  {' '}
                  No. of cars cleaned From 12 Aug 2019{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#00000',
                    marginTop: 16,
                  }}>
                  {' '}
                  12{' '}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <Text style={{fontSize: 16, color: '#707070'}}>
                  {' '}
                  No .of cars missed From 12 Aug 2019{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#00000',
                    marginTop: 16,
                  }}>
                  {' '}
                  03{' '}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginLeft: 15,
                marginRight: 15,
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Button full 
               onPress={() => this.props.navigation.navigate('ScanQRCodeScreen')}>
                <Text button color="black">
                  SCAN QR CODE
                </Text>
               
              </Button>
            </View>

            <View style={{marginLeft: 25, marginRight: 25}}>
              <View style={{paddingTop: 25}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: '#707070'}}>
                  UPCOMING BOOKINGS
                </Text>
                <Text style={{color: '#cfcfcf'}}>Today, 16 AUG 2019</Text>
              </View>
              <View>
                <FlatList
                  data={this.state.data}
                  renderItem={({item: rowData}) => {
                    return (
                      <Card title={null} image={{uri: rowData.imageUrl}}>
                        <CardItem
                          style={{
                            alignContent: 'center',
                            alignContent: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              alignContent: 'center',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flex: 1,
                              padding: 15,
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingRight: 10,
                              }}>
                              <Image
                                source={require('../../../App/Assets/images/Icons/twoWheeler.png')}
                                style={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: '#BCFFEF',
                                  borderRadius: 45,
                                }}
                              />
                              <View>
                                <Text
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                  }}>
                                  White - Honda Activa 4G
                                </Text>
                                <Text
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  White - Honda Activa 4G
                                </Text>
                                <Text
                                  style={{fontWeight: 'bold', fontSize: 17}}>
                                  Daily Car Wash - Dainik
                                </Text>
                              </View>
                              <View
                                style={{
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  padding: 5,
                                }}>
                                <Image
                                  source={require('../../../App/Assets/images/Icons/call.png')}
                                  style={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: '#BCFFEF',
                                    borderRadius: 45,
                                  }}
                                />
                              </View>
                            </View>

                            <View
                              style={{
                                borderStyle: 'dotted',
                                borderWidth: 2,
                                borderRadius: 2,
                                width: 300,
                                borderColor: '#cfcfcf',
                              }}></View>
                            {/* <Dash style={{ width: 300, height: 1, margin: 10, dashColor: "gray"}} /> */}
                            <View>
                              <Text style={{fontSize: 16}}> Customer Name</Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  paddingRight:0
                                }}>
                                <Text>
                                  Green Promise Appartments, Wing B, 302, Opp.
                                  Greenpark Hotel, pune, Maharashtra, 411007
                                </Text>
                                
                                <Image
                                  source={require('../../../App/Assets/images/Icons/MAP.png')}
                                  style={{
                                    width: 40,
                                    height: 40,
                                   
                                    backgroundColor: '#BCFFEF',
                                  }}
                                />
                              </View>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  paddingTop: 10,
                                  paddingLeft: 10,
                                  paddingRight: 10,
                                }}>
                                <View
                                  style={{
                                    justifyContent: 'space-between',
                                    flex: 1,
                                  }}>
                                  <Text style={{fontSize: 17, color: 'gray'}}>
                                    {' '}
                                    16 AUG 2019, 04pm{' '}
                                  </Text>
                                </View>
                              </View>
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
            </View>
          </Block>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 16,
    marginTop: 0,
  },
  buttonContainer: {
    flex: 1,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#F2FCFF',
  },
});
