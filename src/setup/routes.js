import React, {Component} from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import {DrawerActions} from 'react-navigation';
import {TouchableOpacity, Image} from 'react-native';
import {name as appName} from '../app.json'

import Home from '../components/home'
import Profile from '../components/profile'
import Details from '../components/details'
import Quotations from '../components/quotations'
import Tags from '../components/tags'
import DrawerScreen from '../components/common/DrawerScreen';

import HomeMenuIcon from '../components/shared/HomeMenuIcon'
import QuotationsMenuIcon from '../components/shared/QuotationsMenuIcon'

const Tabs = createMaterialTopTabNavigator({
    Quotations: Quotations,
    // Home: Home,
    // Profile: Profile,
    // Details: Details,
    Tags: Tags,
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    },
  });

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Tabs
  }
}, {
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});

const MenuImage = ({navigation}) => {
  if (!navigation.state.isDrawerOpen) {
    return <Image source={require('../assets/images/menu-button.png')}/>
  } else {
    return <Image source={require('../assets/images/left-arrow.png')}/>
  }
}

const StackNavigator = createStackNavigator({

  //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

  DrawerNavigator: {
    screen: DrawerNavigator
  }
}, {
  navigationOptions: ({navigation}) => ({
    title: appName,  // Title to appear in status bar
    headerLeft:
      <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer())
      }}>
        <MenuImage style="styles.bar" navigation={navigation}/>
      </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Home':
          return <HomeMenuIcon />
        case 'Quotations':
          return <QuotationsMenuIcon />
      }
    },

  })
});

export default StackNavigator;
