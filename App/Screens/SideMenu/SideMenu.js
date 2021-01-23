/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image } from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>

            <View style={{ alignContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 25 }}>

              <Image source={require('../../Assets/images/Icons/profile.png')} style={{ borderRadius: 55, width: 110, height: 110 }} />
              <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text> Name Surname</Text>
                <Text style={{ color: '#cfcfcf' }}> Customer ID</Text>
              </View>
            </View>

            <View style={styles.navSectionStyle}>
              {/* <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../Assets/images/Icons/wallet.png')} style={{ width: 35, height: 35 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                  Payment Details
              </Text>
              </View> */} 

            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>

              <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', }}>
                <Image source={require('../../Assets/images/Icons/home.png')} style={{ width: 35, height: 35 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                  Home
              </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', }}>
                <Image source={require('../../Assets/images/Icons/wallet.png')} style={{ width: 35, height: 35 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                  Payment Details
              </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', }}>
                <Image source={require('../../Assets/images/Icons/about.png')} style={{ width: 35, height: 35 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                  About
              </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', }}>
                <Image source={require('../../Assets/images/Icons/info.png')} style={{ width: 35, height: 35 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                  Help
              </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', }}>
                <Image source={require('../../Assets/images/Icons/logout.png')} style={{ width: 35, height: 35 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                  Logout
              </Text>
              </View>

            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
