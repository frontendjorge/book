import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Alert, StatusBar, Image, Dimensions  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {WebBrowser} from 'expo';
import Touchable from 'react-native-platform-touchable';
import HabitatScreenInner from '../screens/HabitatScreen';
import HorizontalScreenInner from '../screens/HorizontalPropertyScreen';
import CommerceScreenInner from '../screens/CommerceScreen';


const screenWidth = Dimensions.get('window').width - 120;
const screenHeight = Dimensions.get('window').height / 2 + 170;

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

  _handlePressPreRentcod = () => {
    WebBrowser.openBrowserAsync('http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html');
  };

  render() {
    return (  
        <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>


        <View style={styles.welcomeNotary}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/ley-habitat.png')
                  : require('../assets/images/ley-habitat.png')
              }
              style={styles.welcomeImageNotary}
              resizeMode='contain'
            />

            <Text style={styles.welcomeNotaryTitle}>
              LEY 675 DE 2001 DE PROPIEDAD HORIZONTAL
            </Text>

            <Text style={styles.welcomeNotaryIntro}>
               Por medio de la cual se regula el régimen de Propiedad Horizontal.
            </Text>

         

        <Touchable
          background={Touchable.Ripple('#A3B40E', false)}
          style={styles.option}
          onPress={() => this.props.navigation.navigate('Horizontal')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                ¡ABRIR LEY!
              </Text>
            </View>
          </View>
        </Touchable>

          </View>

          <View style={styles.welcomeComission}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/ley-vivienda.png')
                  : require('../assets/images/ley-vivienda.png')
              }
              style={styles.welcomeImageComission}
              resizeMode='contain'
            />

            <Text style={styles.welcomeNotaryTitle}>
              LEY 820 DE 2003 - RÉGIMEN DE ARRENDAMIENTO DE VIVIENDA URBANA
            </Text>

            <Text style={styles.welcomeNotaryIntro}>
              Por la cual se expide el régimen de arrendamiento de vivienda urbana y se dictan otras disposiciones.
            </Text>

           

        <Touchable
          background={Touchable.Ripple('#A3B40E', false)}
          style={styles.optiontwo}
          onPress={() => this.props.navigation.navigate('Habitat')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                ¡ABRIR LEY!
              </Text>
            </View>
          </View>
        </Touchable>

          </View>

          <View style={styles.welcomeNotary}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/ley-comercio.png')
                  : require('../assets/images/ley-comercio.png')
              }
              style={styles.welcomeImageNotary}
              resizeMode='contain'
            />

            <Text style={styles.welcomeNotaryTitle}>
              CÓDIGO DE COMERCIO
            </Text>

            <Text style={styles.welcomeNotaryIntro}>
              Aquí podrá navegar a un sitio externo donde conocerá el código de Comercio para Colombia. Tenga en cuenta que saldrá de la aplicación.
            </Text>

 

        <Touchable
          background={Touchable.Ripple('#A3B40E', false)}
          style={styles.option}
          onPress={this._handlePressPreRentcod}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                ¡EXPLORAR LEY!
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

class HabitatScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <HabitatScreenInner></HabitatScreenInner>
    );
  }
};

class HorizontalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <HorizontalScreenInner></HorizontalScreenInner>
    );
  }
};

class CommerceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <CommerceScreenInner></CommerceScreenInner>
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
    backgroundColor: '#5EB8D2',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 70,
    height: 460
   
  },
  welcomeImageNotary: {
    width: '80%',
    maxHeight: '60%', 
    justifyContent: 'flex-start'
  },
  welcomeComission: {
    backgroundColor: '#A3B40E',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 70,
    height: 470
   
  },
  welcomeImageComission: {
    width: '80%',
    maxHeight: '55%', 
    justifyContent: 'flex-start'
  },
  welcomeNotaryTitle: {
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
    paddingTop: 15,
    fontSize:20,
    textAlign: 'center'
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
    backgroundColor: '#A3B40E',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:40,
    borderBottomColor: 'transparent',
    borderRadius: 10,
  },
  optiontwo: {
    backgroundColor: '#5EB8D2',
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



