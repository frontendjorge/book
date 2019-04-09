import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Alert, StatusBar, Image, Dimensions  } from 'react-native';
import {WebBrowser} from 'expo';
import Touchable from 'react-native-platform-touchable';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
    header: null,
    headerStyle: {
      backgroundColor: '#333333',
      borderBottomColor: 'black',
      borderBottomWidth: 0,
  },
  };

  _handlePressPreRent = () => {
    WebBrowser.openBrowserAsync('https://inmoobi.com/propietarios/consignar-inmueble-para-arrendar');
  };



  render() {
    return (  
      <View style={styles.container}>
      <ScrollView>
          <View style={styles.welcomeNotary}>
                

                  <Text style={styles.welcomeNotaryTitle}>
                    PERMÍTANOS ADMINISTRAR SU INMUEBLE
                  </Text>

                  <Text style={styles.welcomeNotaryIntro}>
                  Nos dedicamos al corretaje y administración
de inmuebles con un equipo de brokers 
altamente capacitados para atender
cada consulta con agilidad y profesionalismo.
                  </Text>

                

              <Touchable
                background={Touchable.Ripple('#A3B40E', false)}
                style={styles.option}
                onPress={this._handlePressPreRent}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>
                      ¡PUBLIQUE GRATIS SU INMUEBLE*!
                    </Text>
                  </View>
                </View>
              </Touchable>

              <Text style={styles.smallText}>
                    Saldrá de la aplicación a nuestro sitio web. *Aplica zonas especificas en Bogotá D.C.
                  </Text>

              <Image
                    source={
                      __DEV__
                        ? require('../assets/images/administra.png')
                        : require('../assets/images/administra.png')
                    }
                    style={styles.welcomeImageNotary}
                    resizeMode='cover'
                  />
          </View>
        </ScrollView>  
        </View>
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom:0,
    backgroundColor: '#789BA8',
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
    paddingBottom: 0,
  },
  welcomeNotary: {
    backgroundColor: '#789BA8',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    height: screenHeight,
    marginBottom: 0, 
   
  },
  welcomeImageNotary: {
    width: screenWidth,
    maxHeight: '100%',
    marginBottom: 0,
    marginTop: 10, 
  },
  welcomeNotaryTitle: {
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
    paddingTop: 30,
    fontSize:22,
    textAlign: 'center',
    width: '80%'
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
    backgroundColor: '#EB8A01',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:0,
    borderBottomColor: 'transparent',
    borderRadius: 10,
  },
  smallText: {
    fontFamily: "Roboto-Light",
    paddingTop: 5,
    paddingBottom: 15,
    fontSize:13,
    color: '#ffffff',
    width: '70%',
    textAlign: 'center'
  },
  optiontwo: {
    backgroundColor: '#EB8A01',
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
