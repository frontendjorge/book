import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Picker, Alert  } from 'react-native';
import { TextInputMask, TextMask  } from 'react-native-masked-text'



export default class ComissionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      commissionValue: '0',
      taxValue: '0',
      totalValueWithTax: '0'
    };
  }


    _onPressLearnMore = async () => {
      //var sellValue = document.getElementById("sellValue").value;
      let seelValue= this.state.sellValue;
      const unmaskedseelValue = this.state.sellValue.getRawValue();
      let dealValue= this.state.dealValue;
      if(unmaskedseelValue != NaN && dealValue != undefined){
        let commissionValueResult = unmaskedseelValue * dealValue /100;
        let taxValueResult = commissionValueResult * 19 /100;
        let totalCommissionTax = commissionValueResult + taxValueResult;
        //alert(seelValue);
        //alert(dealValue);
        //alert(commissionValueResult);

        this.setState({commissionValue: commissionValueResult});
        this.setState({taxValue: taxValueResult});
        this.setState({totalValueWithTax: totalCommissionTax});

        //clear input text
        this.setState({
              sellValue: "",
              dealValue: ""
            })
      }else{
        Alert.alert("DEBES SABER QUE","Es necesario ingresar los valores a calcular"); 
      }
      
    }

    componentDidMount() {
      
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <View>   
          <Text style={styles.bigTitle}>
            Calculadora comisión venta  
          </Text>
          <Text style={styles.info}>
            Calculadora comisión venta  {/*this.state.commissionValue*/}
          </Text>
          
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
              title="¡Calcular ahora!"
              color="#841584"
              accessibilityLabel="Presiona para calcular la comisión de venta"
            />

            <View style={styles.commissionStyle}>
              <Text style={styles.commissionLabel}>En esta venta tu ganarás: </Text>
              <TextMask
              style={styles.commissionLabelV}
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

            <View style={styles.commissionStyle}>
              <Text style={styles.commissionLabel}>IVA del 19%: </Text>
              <TextMask
              style={styles.commissionLabelV}
              value={this.state.taxValue}
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

            <View style={styles.commissionStyle}>
              <Text style={styles.commissionLabel}>Comisión + IVA: </Text>
              <TextMask
              style={styles.commissionLabelV}
              value={this.state.totalValueWithTax}
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

          </View>
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
  commissionStyle: {
    flex: 1, 
    flexDirection: 'row',
  },
  commissionLabel: {
    width: '50%',
  },
  commissionLabelV: {
    width: '50%',
  }
});

