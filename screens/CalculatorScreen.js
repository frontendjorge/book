import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button  } from 'react-native';
import { TextInputMask, TextMask  } from 'react-native-masked-text'

export default class CalculatorScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      commissionValue: '0'
    };
  }


    _onPressLearnMore = async () => {
      //var sellValue = document.getElementById("sellValue").value;
      let seelValue= this.state.sellValue;
      const unmaskedseelValue = this.state.sellValue.getRawValue();
      let dealValue= this.state.dealValue;
      if(unmaskedseelValue != NaN && dealValue != undefined){
        let commissionValueResult = unmaskedseelValue * dealValue /100;
        //alert(seelValue);
        //alert(dealValue);
        //alert(commissionValueResult);

        this.setState({commissionValue: commissionValueResult});


        //clear input text
        this.setState({
              sellValue: "",
              dealValue: ""
            })
      }else{
        alert("Debes ingresar los valores a calcular"); 
      }
      
    }

    componentDidMount() {
      
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text style={styles.bigTitle}>
          Calculadora comisión venta  
        </Text>
        <Text style={styles.info}>
          Calculadora comisión venta  {/*this.state.commissionValue*/}
        </Text>
        <View>
           <TextMask
          value={this.state.commissionValue}
          type={'money'}
           options={{
              precision: 0,
              separator: ',',
              delimiter: '.',
              unit: '$',
              suffixUnit: ''
            }}
          />
        </View>
        <View>

          <TextInputMask
            type={'money'}
            options={{
              precision: 0,
              separator: ',',
              delimiter: '.',
              unit: '$',
              suffixUnit: ''
            }}
            value={this.state.sellValue}
            ref={(ref) => this.state.sellValue = ref}
            onChangeText={text => {
            this.setState({
              sellValue: text
            })
            }}
            id="sellValue"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Ingrese el valor de venta"
            keyboardType={'numeric'}                            
          />
         
       
            <TextInput
              id="dealValue"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Ingrese el porcentaje pactado"
              keyboardType={'numeric'}
              onChangeText={(text) => this.state.dealValue = text}
              value={this.state.dealValue}
            />
          <Button
            onPress={this._onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Presiona para calcular la comisión de venta"
          />
        </View>
        
           
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  info: {
    textAlign: 'justify',
    fontSize: 16,
  },
});

