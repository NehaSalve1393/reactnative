import React, { Component } from 'react';
import { Image } from 'react-native'


import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeTab from '../../App/Screens/HomeTabs/HomeTab';
import BookingTab from '../../App/Screens/HomeTabs/BookingTab';
import VehicalTab from '../../App/Screens/HomeTabs/VehicalTab';
import InventoryTab from '../../App/Screens/HomeTabs/InventoryTab';
import SubscriptionTab from '../../App/Screens/HomeTabs/SubscriptionTab';
import ScanQRCodeScreen from '../../App/Screens/HomeTabs/ScanQRCodeScreen';
import NoVehicalScreen from '../../App/Screens/NoVehicalScreen';
import Booking_Route from '../../App/Navigation/Booking_Route'
import InventorySummary from '../Screens/InventorySummary'

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../App/Constants/theme'



const Home_Route_Tab = createBottomTabNavigator({
    Home: {
        // screen: HomeTab,

        screen: createStackNavigator(
            {
                HomeTab_Nav: { screen: HomeTab },
              //  ScanQRCodeScreen:{screen:ScanQRCodeScreen}
              NoVehicalScreen:{screen:NoVehicalScreen}
                // Detail_Nav: { screen: DetailPage_CurrentCase }
            }),
        navigationOptions: () => ({
            
            tabBarIcon: ({ tintColor }) => (
                // <Icon
                //     name="home"
                //     color={tintColor}

                // />

                <Image source={require('../../App/Assets/images/Icons/home.png')} style={{  width: 20, height: 20 , color: tintColor}} />

            )
        })
    },
    Booking: {
        // screen: HomeTab,

        screen: createStackNavigator(
            {
                BookingTab_Nav: { screen: Booking_Route },

                // Detail_Nav: { screen: DetailPage_CurrentCase }
            }),
        navigationOptions: () => ({
            title: 'Booking',
            tabBarIcon: ({ tintColor }) => (
                // <Icon
                //     name="file"
                //     color={tintColor}

                // />
                <Image source={require('../../App/Assets/images/Icons/list.png')} style={{  width: 16, height: 20 , color: tintColor}} />

            )
        })
    },

    Vehical: {
        // screen: HomeTab,

        screen: createStackNavigator(
            {
                VehicalTab_Nav: { screen: VehicalTab },
                // Detail_Nav: { screen: DetailPage_CurrentCase }
            }),
        navigationOptions: () => ({
            title: 'Earnings',
            
            tabBarIcon: ({ tintColor }) => (
                // <Icon
                //     name="tire"
                //     color={tintColor}
                // />


                <Image source={require('../../App/Assets/images/Icons/wheel.png')} style={{  width: 20, height: 20, color: tintColor }} />

            )
        })
    },


    Inventory: {
        // screen: HomeTab,

        screen: createStackNavigator(
            {
                InventoryTab: { screen: InventoryTab },
                InventorySummary:{screen:InventorySummary}
                // Detail_Nav: { screen: DetailPage_CurrentCase }
            }),
        navigationOptions: () => ({
            title: 'Inventory',
            tabBarIcon: ({ tintColor }) => (
                // <Icon
                //     name="receipt"
                //     color={tintColor}

                // />

                <Image source={require('../../App/Assets/images/Icons/Subscription.png')} style={{  width:15, height: 20 , color: tintColor}} />

            )
        })
    },


},
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            upperCaseLabel: false,
            showLabel: true,
            inactiveTintColor: "#BCFFEF",
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: "#004ACC",
         inactiveTintColor: "#000",
            showLabel: true,
            showIcon: true
        }
    })
// AppTop = createAppContainer(Route_Tab);


export default Home_Route_Tab;