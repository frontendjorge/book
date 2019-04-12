import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Picker, Alert  } from 'react-native';
import { TextInputMask, TextMask  } from 'react-native-masked-text'
import Touchable from 'react-native-platform-touchable';



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
            CALCULADORA COMISIÓN VENTA DE INMUEBLE  
          </Text>
          <Text style={styles.smallTitle}>
            En el caso de las viviendas urbanas la tarifa fijada que cobran por comisión es del 3 por ciento sobre el valor final de la negociación, pero en predios rurales esta puede llegar a ser del 8 por ciento.
          </Text>

          <Text style={styles.smallTitle}>
            No obstante, para algunos profesionales su tarifa en viviendas es del 4 por ciento y en predios rurales alcanza el 10 por ciento. (En el contrato de consignación debe quedar relacionado el valor que se pacte entre el oferente). 
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
              style={styles.searchInput}
              placeholder="Ingrese el valor de venta"
              keyboardType={'numeric'}                            
            />
          
        
              <TextInput
                id="dealValue"
                style={styles.searchInput}
                placeholder="Ingrese el porcentaje pactado"
                keyboardType={'numeric'}
                onChangeText={(text) => this.state.dealValue = text}
                value={this.state.dealValue}
              />

              {/*<Button
                onPress={this._onPressLearnMore}
                title="¡Calcular ahora!"
                color= 'rgb(254, 160, 79)'
                accessibilityLabel="Presiona para calcular la comisión de venta"
              ><Text>¡Calcular ahora!</Text>
              </Button>*/}

              <Touchable
                background={Touchable.Ripple('#157A6B', false)}
                onPress={this._onPressLearnMore}>
                <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionCalculate}>
                  <Text style={styles.optionCalculateInner}>
                    ¡CALCULAR AHORA!
                  </Text>
                </View>
                </View>
              </Touchable>

         
          <View style={styles.centerLegendsData}>

              <View style={styles.commissionStyle}>
                <Text style={styles.iconTotals}></Text>
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
                <Text style={styles.iconTotals}></Text>
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
                <Text style={styles.iconTotals}></Text>
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

          <View>
          <Text style={styles.smallTitleXS}>
              El impuesto IVA aplica sólo para la responsabilidad trubutaria del Regimén común y en el contrato de corretaje deberá especificar el monto de la comisión. Si es corredor inmobiliario independiente se debe establecer en el contrato de corretaje el pago de honorarios.
          </Text>
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
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#282B33',
    color: '#ffffff',
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgb(254, 160, 79)',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
  },
  centerLegendsData: {
    width: '90%',
    justifyContent:'center',
    marginTop:40,
  },
  iconTotals: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: 'rgb(254, 160, 79)',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  commissionLabel: {
    width: '60%',
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
    marginTop: 8,
  },
  commissionLabelV: {
    width: '30%',
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    marginTop: 8,
  },
  legends: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    position: 'relative',
    display: 'flex'
  
  },
  legendsInner: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    marginTop:300
  },
  legendsContainer: {
    paddingTop:20,
  },
  bigTitleSpecial: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
    marginTop: 10,
    marginBottom: 0,
  },
  smallTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#ffffff',
    marginTop: 6,
    marginBottom: 6,
    fontFamily: "Roboto-Thin",
  },
  smallTitleXS: {
    textAlign: 'center',
    fontSize: 13,
    color: '#cccccc',
    marginTop: 6,
    marginBottom: 6,
    paddingBottom:30,
    fontFamily: "Roboto-Thin",
  },
  searchInput:{
    padding: 10,
    borderColor: '#333333',
    borderWidth: 1,
    fontFamily: "Roboto-Thin",
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
    fontSize: 15,
    color: '#ffffff',
    borderRadius: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#353A45',
  },
  info: {
    textAlign: 'justify',
    fontSize: 16,
  },
  commissionStyle: {
    flex: 1, 
    flexDirection: 'row',
  },
  searchInputButtom: {
    backgroundColor: 'rgb(254, 160, 79)',
    color: '#ffffff',
    padding: 10,
    fontFamily: "Roboto-Thin",
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
    fontSize: 15,
    borderRadius: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  optionCalculate: {
    width: '100%',
    height:40,
    paddingTop:5,
    paddingBottom:10,
    textAlign:'center',
    backgroundColor: 'rgb(254, 160, 79)',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  optionCalculateInner: {
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    textAlign: 'center'
  }
});

