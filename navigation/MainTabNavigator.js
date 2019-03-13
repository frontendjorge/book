import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
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

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
  tabBarOptions: { 
    activeTintColor: Colors.activeTintColor,
    style: {
      backgroundColor: Colors.tabBarBackground,
      shadowTop,
    },
  }
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
    },
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'INMOOBI S.A.S',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information' : 'md-information'}
    />
  ),
  tabBarOptions: { 
    activeTintColor: Colors.activeTintColor,
    style: {
      backgroundColor: Colors.tabBarBackground,
      shadowTop,
    },
  }
};

export default createBottomTabNavigator({
  HomeStack,
  CalculatorStack,
  LinksStack,
  SettingsStack,
});
