import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Alert, StatusBar  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NotaryScreenInner from '../screens/NotaryScreen';
import ComissionScreenInner from '../screens/ComissionScreen';


class CalculatorScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    title: 'Initial',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  
  };
  render() {
    return (  
        <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          <Button
            title="Go to Notary"
            onPress={() => this.props.navigation.navigate('Notary')}
          />
          <Button
            title="Go to comission"
            onPress={() => this.props.navigation.navigate('Comission')}
          />
          </ScrollView>
        </View>
    );
  }
};

class NotaryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <NotaryScreenInner></NotaryScreenInner>
    );
  }
};

class ComissionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <ComissionScreenInner></ComissionScreenInner>
    );
  }
};

const RootStack = createStackNavigator(
  {
    Comission: ComissionScreen,
    Notary: NotaryScreen,
    Calculator: CalculatorScreen,
  },
  {
    initialRouteName: 'Calculator',
    headerMode: 'none',
    header: null
  }
);

const AppContainerCalculator = createAppContainer(RootStack);

export default class AppCalculator extends React.Component {
  static navigationOptions = {
    title: 'Calculator',
    header: null
  };
  render() {
    return <AppContainerCalculator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#ffffff',
    color: '#333'
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  info: {
    textAlign: 'justify',
    fontSize: 16,
  },
  contentContainer: {
    paddingTop: 0,
  },
});


