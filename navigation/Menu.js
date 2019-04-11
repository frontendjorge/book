import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Image, Dimensions, Platform, TouchableHighlight  } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView  } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { AdMobBanner } from 'expo';

import CalculatorScreen from '../screens/CalculatorScreen';
import NotaryScreenInner from '../screens/NotaryScreen';
import ComissionScreenInner from '../screens/ComissionScreen';
import LinksScreenInner from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';





class CalculatorScreenSection extends React.Component {
    static navigationOptions = {
      header: null,
      title: 'Simulador Gastos Notariales',
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-calculator" size={24} color={focused ? '#ffffff' : 'white'}/>
    ),
    };
    render() {
      return (
          <View style={styles.container}>
            <Button
            style={{ backgroundColor: '#6FAF98', }}
            onPress={() => this.props.navigation.openDrawer()}
            title= "Abrir menu"

            />
            <CalculatorScreen></CalculatorScreen>
          </View>
      );
    }
  };

class NotaryScreenSection extends React.Component {
    static navigationOptions = {
      header: null,
      title: 'Gastos Notariales',
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-home" size={24} color={focused ? '#ffffff' : 'white'}/>
    ),
    };
    render() {
      return (
        <View style={styles.container}>
            <Button
            style={{ backgroundColor: '#6FAF98', }}
            onPress={() => this.props.navigation.openDrawer()}
            title= "Abrir menu"

            />
            <NotaryScreenInner></NotaryScreenInner>
        </View>  
      );
    }
  };

  class ComissionScreenSection extends React.Component {
    static navigationOptions = {
      header: null,
      title: 'Calcular Comisión',
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-home" size={24} color={focused ? '#ffffff' : 'white'}/>
    ),
    };
    render() {
      return (
        <View style={styles.container}>
            <Button
            style={{ backgroundColor: '#6FAF98', }}
            onPress={() => this.props.navigation.openDrawer()}
            title= "Abrir menu"

            />
            <ComissionScreenInner></ComissionScreenInner>
        </View>  
      );
    }
  };

  class LawsScreenSection extends React.Component {
    static navigationOptions = {
      header: null,
      title: 'Leyes Inmobiliarias',
      drawerIcon: ({ focused }) => (
          <Ionicons name="md-book" size={24} color={focused ? '#ffffff' : 'white'}/>
      ),
    };
    render() {
      return (
        <View style={styles.container}>
            <Button
            style={{ backgroundColor: '#6FAF98', }}
            onPress={() => this.props.navigation.openDrawer()}
            title= "Abrir menu"

            />
            <LinksScreenInner></LinksScreenInner>
        </View>  
      );
    }
  };

  class AdminScreenSection extends React.Component {
    static navigationOptions = {
      header: null,
      title: 'Administramos su Inmueble',
      drawerIcon: ({ focused }) => (
          <Ionicons name="md-book" size={24} color={focused ? '#ffffff' : 'white'}/>
      ),
    };
    render() {
      return (
        <View style={styles.container}>
            <Button
            style={{ backgroundColor: '#6FAF98', }}
            onPress={() => this.props.navigation.openDrawer()}
            title= "Abrir menu"

            />
            <SettingsScreen></SettingsScreen>
        </View>  
      );
    }
  };

const customDrawerContentComponent = props => (

    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.welcomeImageMenu}>
            <Image
                source={
                    __DEV__
                    ? require('../assets/images/logo-inmoobi-white.png')
                    : require('../assets/images/logo-inmoobi-white.png')
                }
                style={styles.welcomeImageMenuInner}
                resizeMode='contain'
            />
            </View>
          
            <DrawerItems {...props} />


            <View style={styles.containeradmenu}>
                {Platform.OS === 'android' && <AdMobBanner 
                style={styles.blockcenter}
                bannerSize="mediumRectangle"
                adUnitID="ca-app-pub-8103485771273260/3830332289"
                testDeviceID="EMULATORMIMIX2"
                onDidFailToReceiveAdWithError={this.bannerError}
                />  }
            

            {Platform.OS === 'ios' && <AdMobBanner 
                style={styles.blockcenter}
                bannerSize="mediumRectangle"
                adUnitID="ca-app-pub-8103485771273260/4020714605"
                testDeviceID="EMULATORMIMIX2IOS"
                onDidFailToReceiveAdWithError={this.bannerError}
                />  }
            </View>    


        </SafeAreaView>
    </ScrollView>

);

const navigatordrawer = createDrawerNavigator(
    {
        CalculatorScreenSection,
        //NotaryScreenSection,
        //ComissionScreenSection,
        LawsScreenSection,
        AdminScreenSection
       
    },
    {
        drawerType: 'slide',
        drawerPosition: 'left',
        drawerWidth: 300,
        drawerBackgroundColor: '#282B33',
        contentComponent: customDrawerContentComponent,
        contentOptions: {
            activeTintColor: '#ffffff',
            activeBackgroundColor: '#111010',
            inactiveTintColor: 'white',
            labelStyle: {
              fontFamily: 'Roboto-Medium',
              width: '80%',
              marginLeft: -8,
              fontSize: 15
            },
          }
    }
    
)

export default createAppContainer(navigatordrawer);


const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    welcomeImageMenu: {
      width: '80%',
      height: 110,
      flex: 1,
    },
    welcomeImageMenuInner: {
        width: '100%',
        height: 100,
        marginLeft: 25
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
    containeradmenu: {
        alignContent: 'center',
        width:'100%',
        maxHeight: 250,
        overflow: 'hidden',
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop: 0,
        marginTop: 20,
    }
  });
  