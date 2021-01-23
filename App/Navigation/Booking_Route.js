import React, { Component } from 'react';
import {  createAppContainer  } from 'react-navigation';
import {createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator } from 'react-navigation-stack'




import PastBooking from '../../App/Screens/HomeTabs/BookingTab/PastBooking'
import UpcomingBookings from '../../App/Screens/HomeTabs/BookingTab/UpcomingBookings'

import { Icon } from 'native-base'


// import  {Theme}  from '../Constants/index'


import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../Constants/theme';



const Booking_Route = createMaterialTopTabNavigator({
      Pending: {
           screen: createStackNavigator(
            {
                HomeTab_Nav: { screen: UpcomingBookings },
                //Detail_Nav: { screen: DetailPage_History }
            }),
            
        navigationOptions: () => ({
            title: 'Upcoming Bookings',
            
           
        //   tabBarIcon: ({ tintColor }) => (
        //       <Icon
        //           name="md-clock"
        //           color={tintColor}

        //       />
        //   )
      })

      },
      Submitted: {
        screen: createStackNavigator(
          {
              HomeTab_Nav: { screen: PastBooking },
             // Detail_Nav: { screen: DetailPage_History }
          }),
          
        navigationOptions: ({ tintColor }) => ({
            title: 'Past Bookings',
            
            
            
        //   tabBarIcon: ({ tintColor }) => (
        //       <Icon
        //           name="md-done-all"
        //           color={tintColor}

        //       />
        //   )
      })

      },
     
    
  },

      {
          animationEnabled: true,
          swipeEnabled: true,
          tabBarPosition: 'top',
          
          tabBarOptions: {
            
              showLabel: true,
              showIcon: false,
              inactiveTintColor: '#ffff',
              style: {
                 
               
                  ...Platform.select({
                      android: {
                          backgroundColor: 'white'
                      }
                  })
              },
              indicatorStyle: {
                backgroundColor: '#00AFEC',
            },
              activeTintColor: '#00AFEC',
              inactiveTintColor: '#8E8E8E',
              backgroundColor:'#ffff',
              showLabel: true,
              showIcon: true
          }
      })

export default Booking_Route;


