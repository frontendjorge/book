import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Picker, Alert  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class CalculatorScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <Text>aqui botonera</Text>
          <Button
          title="Go to Details"
          onPress={() => 
            this.props.navigation.navigate('NotaryScreen')
          }
        />
           
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  }
});

