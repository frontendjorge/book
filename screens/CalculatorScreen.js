import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Alert, StatusBar, Image, Dimensions  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Touchable from 'react-native-platform-touchable';
import NotaryScreenInner from '../screens/NotaryScreen';
import ComissionScreenInner from '../screens/ComissionScreen';

const screenWidth = Dimensions.get('window').width - 120;
const screenHeight = Dimensions.get('window').height / 2 + 160;


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

          <View style={styles.welcomeNotary}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/intro-notary.png')
                  : require('../assets/images/intro-notary.png')
              }
              style={styles.welcomeImageNotary}
              resizeMode='contain'
            />

            <Text style={styles.welcomeNotaryTitle}>
              GASTOS NOTARIALES
            </Text>

            <Text style={styles.welcomeNotaryIntro}>
              Aquí podrá simular los valores apróximados a pagar por gastos de escrituración y registro en Colombia al vender un inmueble.
            </Text>

           

        <Touchable
          background={Touchable.Ripple('#157A6B', false)}
          style={styles.option}
          onPress={() => this.props.navigation.navigate('Notary')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                ¡SIMULAR AHORA!
              </Text>
            </View>
          </View>
        </Touchable>

          </View>

          <View style={styles.welcomeComission}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/intro-comission.png')
                  : require('../assets/images/intro-comission.png')
              }
              style={styles.welcomeImageComission}
              resizeMode='contain'
            />

            <Text style={styles.welcomeNotaryTitle}>
            ¿CUÁNTO ME VOY A GANAR?
            </Text>

            <Text style={styles.welcomeNotaryIntro}>
              Aquí podrá simular los valores que ganará por comisión o honorarios en la venta de un inmueble.
            </Text>


          <Touchable
            background={Touchable.Ripple('#A3B40E', false)}
            style={styles.optiontwo}
            onPress={() => this.props.navigation.navigate('Comission')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  ¡CALCULAR AHORA!
                </Text>
              </View>
            </View>
          </Touchable>

          </View>
          
          
          
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
  welcomeNotary: {
    backgroundColor: '#157A6B',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    height: 450
   
  },
  welcomeImageNotary: {
    width: '80%',
    maxHeight: '60%', 
    justifyContent: 'flex-start'
  },
  welcomeComission: {
    backgroundColor: '#507743',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 40,
    height: 450
   
  },
  welcomeImageComission: {
    width: '80%',
    maxHeight: '60%', 
    justifyContent: 'flex-start'
  },
  welcomeNotaryTitle: {
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
    paddingTop: 15,
    fontSize:20
  },
  welcomeNotaryIntro: {
    color: '#ffffff',
    fontFamily: "Roboto-Light",
    paddingTop: 15,
    paddingBottom: 15,
    fontSize:15,
    width: '80%',
    textAlign: 'center'
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  optionIconContainer: {
    marginRight: 0,
  },
  option: {
    backgroundColor: '#063927',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:40,
    borderBottomColor: 'transparent',
    borderRadius: 10,
  },
  optiontwo: {
    backgroundColor: '#063927',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:40,
    borderBottomColor: 'transparent',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 15,
    marginTop: 0,
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
  },
});


