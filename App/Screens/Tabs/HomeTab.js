import React, { Component } from 'react';
import {View,Image, KeyboardAvoidingView, Dimensions, StyleSheet} from 'react-native';

import {
  Container,
  Icon
} from 'native-base';

import Timeline from 'react-native-timeline-flatlist';

import { Button, Block, Text, Input } from '../../components';

const { height } = Dimensions.get('window');
 
export default class HomeTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  }  

 
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
 
    this.data = [
      {
        time: '09:00',
        title: 'Event 1',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        lineColor: '#2979FF',
        icon: require('../../assets/images/Base/Logo.png'),
        imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
      {
        time: '10:45',
        title: 'Event 2',
        description:
          'It is a long established fact that a reader will be distracted by the readable content.',
          icon: require('../../assets/images/Base/Logo.png'),
          imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
      {
        time: '12:00',
        title: 'Event 3',
        icon: require('../../assets/images/Base/Logo.png'),
      },
      {
        time: '14:00',
        title: 'Event 4',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking.',
        lineColor: '#2979FF',
        icon: require('../../assets/images/Base/Logo.png'),
        imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
      {
        time: '16:30',
        title: 'Event 5',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          icon: require('../../assets/images/Base/Logo.png'),
          imageUrl:
          'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      },
    ];
    this.state = { selected: null };
  }
 
  onEventPress(data) {
    this.setState({ selected: data });
  }
 
  renderSelected() {
    if (this.state.selected)
      return (
        <Text style={{ marginTop: 10 }}>
          Selected event: {this.state.selected.title} at{' '}
          {this.state.selected.time}
        </Text>
      );
  }
  render() {
    const { navigation } = this.props;

    return (
     
        <Block center middle>
          <Block middle>
            <Image
              source={require('../../assets/images/Base/Logo.png')}
              style={{ height: 48, width: 202 }}
            />
          </Block>
          <Block >
            <Text h3 style={{ marginBottom: 6 }}>
             HomeTab
            </Text>
          
          
          
          <Timeline
         style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor="#2979FF"
          lineColor="#2979FF"
          timeContainerStyle={{ minWidth: 52, marginTop: 1 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 },
          }}
          innerCircle={'dot'}
          onEventPress={this.onEventPress}
          separator={false}
          detailContainerStyle={{
            marginBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: '#BBDAFF',
            borderRadius: 10,
          }}
          columnFormat="two-column"
        />
        </Block>
          </Block>
     
 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    
  },
});