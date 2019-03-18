import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import NotaryScreen from '../screens/NotaryScreen';
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

const NotaryScreenStack = createStackNavigator({
  Notary: NotaryScreen,
});

NotaryScreenStack.navigationOptions = {
  tabBarLabel: 'Escrituración',
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



export default createBottomTabNavigator({
  NotaryScreenStack
});



