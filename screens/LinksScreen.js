import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Alert, StatusBar  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NotaryScreenInner from '../screens/NotaryScreen';
import ComissionScreenInner from '../screens/ComissionScreen';


class LawsScreen extends React.Component {
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
          <Text>Calculator screen</Text>
          <Button
            title="Go to ph law"
            onPress={() => this.props.navigation.navigate('Horizontal')}
          />
          <Button
            title="Go to habitat"
            onPress={() => this.props.navigation.navigate('Habitat')}
          />
           <Button
            title="Go to Cod commerce"
            onPress={() => this.props.navigation.navigate('Commerce')}
          />
          </ScrollView>
        </View>
    );
  }
};

class HabitatScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <NotaryScreenInner></NotaryScreenInner>
    );
  }
};

class HorizontalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <ComissionScreenInner></ComissionScreenInner>
    );
  }
};

class CommerceScreen extends React.Component {
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
    Horizontal: HorizontalScreen,
    Habitat: HabitatScreen,
    Commerce: CommerceScreen,
    Laws: LawsScreen,
  },
  {
    initialRouteName: 'Laws',
    headerMode: 'none',
    header: null
  }
);

const AppContainerLaws = createAppContainer(RootStack);

export default class AppCalculator extends React.Component {
  static navigationOptions = {
    title: 'Calculator',
    header: null
  };
  render() {
    return <AppContainerLaws />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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


