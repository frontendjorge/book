import React, { Component } from 'react';
import { Platform, View, Text, TouchableHighlight, Image, StyleSheet, Button } from 'react-native';
import { DrawerNavigator, StackNavigator  } from 'react-navigation';
import CalculatorScreen from '../screens/CalculatorScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

class MyCalculatorScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Calculadoras',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/images/intro-notary.png')}
                style={[styles.icon]}
            />
        )
    };

    render(){
        return(
        <View>
            <Button
                onPress={ () => this.props.navigation.openDrawer()}
                title="DrowerOpen"
            />
            <CalculatorScreen/>
        </View>
        
        )
    }

}

class MyLawScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Leyes',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/images/ley-vivienda.png')}
                style={[styles.icon]}
            />
        )
    };

    render(){
        return(
        <View>

            <Button
                onPress={ () => this.props.navigation.goBack()}
                title="Go back"
            />

            <Button
                onPress={ () => this.props.navigation.openDrawer()}
                title="DrowerOpen"
            />
            <LinksScreen/>
        </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      backgroundColor: '#ffffff',
      color: '#333'
    },
    icon: {
        width: 24,
        height: 24,
    },
});


export default DrawerNavigator ({
    Home: {
        screen: MyCalculatorScreen,
    },
    Laws: {
        screen: MyLawScreen,
    },
},
    {
        drawerPosition: 'right',
        initialRouteName: 'Home',
        drawerBackgroundColor: 'orange',
        drawerWidth: 200,
    }
)


