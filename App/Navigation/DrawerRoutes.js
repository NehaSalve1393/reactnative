import React, { Component } from 'react';
import Home_Route_Tab  from '../../App/Navigation/Home_Route_Tab'
import About from '../../App/Screens/About';
import SideMenu from '../../App/Screens/SideMenu/SideMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';

const DrawerRoutes = createDrawerNavigator({
  Page1: {
    screen: Home_Route_Tab
  },
  Page2: {
    screen: About
  },
  Page3: {
    screen: About
  }
}, 

{
  contentComponent: SideMenu,
  drawerWidth: 300
});

export default DrawerRoutes;
