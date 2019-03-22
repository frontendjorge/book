import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import {WebBrowser} from 'expo';
import Touchable from 'react-native-platform-touchable';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
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
        <View>
        <Text>hola</Text>
        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressPreRent}>
          <View style={{ flexDirection: 'row' }}>
           
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Pre consigna para administración
              </Text>
            </View>
          </View>
        </Touchable>
        </View>
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
