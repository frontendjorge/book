import React from 'react';
import { Platform, StatusBar, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { AppLoading } from 'expo';
import { AdMobBanner } from 'expo-ads-admob'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
//import AppNavigator from './navigation/AppNavigator';
import AppNavigatorDrawer from './navigation/Menu';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };


  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <StatusBar hidden={true} />
          <AppNavigatorDrawer/>
          {/*<AppNavigator />*/}

            {Platform.OS === 'android' && <AdMobBanner 
              style={styles.blockcenter}
              bannerSize="banner"
              adUnitID="ca-app-pub-8103485771273260/2997499904"
              testDeviceID="EMULATORMIMIX2"
              onDidFailToReceiveAdWithError={this.bannerError}
            />  }
          

          {Platform.OS === 'ios' && <AdMobBanner 
              style={styles.blockcenter}
              bannerSize="banner"
              adUnitID="ca-app-pub-8103485771273260~4171251245"
              testDeviceID="EMULATORMIMIX2IOS"
              onDidFailToReceiveAdWithError={this.bannerError}
      />  }
         
         

        </View>
        
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  blockcenter: {
    alignContent: 'center',
    width:'100%',
    overflow: 'hidden',
    backgroundColor:'#111010',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical: 5,
  },
});
