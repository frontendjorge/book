import React, { Component } from 'react';
import { Platform, View, Text, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, DrawerNavigator  } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const shadowTop = {
  ...Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: { height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 20,
    },
  })
};


const CalculatorStack = createStackNavigator({
  Links: CalculatorScreen,
});

CalculatorStack.navigationOptions = {
  tabBarLabel: 'Calculadoras',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calculator' : 'md-calculator'}
    />
  ),
  tabBarOptions: { 
    activeTintColor: Colors.activeTintColor,
    style: {
      backgroundColor: Colors.tabBarBackground,
      shadowTop,
      paddingVertical: 6,
    },
  }
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Leyes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  ),
  tabBarOptions: { 
    activeTintColor: Colors.activeTintColor,
    style: {
      backgroundColor: Colors.tabBarBackground,
      shadowTop,
      paddingVertical: 6,
    },
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Administración',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
  tabBarOptions: { 
    activeTintColor: Colors.activeTintColor,
    style: {
      backgroundColor: Colors.tabBarBackground,
      shadowTop,
      paddingVertical: 6,
    },
  }
};



export default createBottomTabNavigator({

  CalculatorStack,
  LinksStack,
  SettingsStack,
});






