import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Picker, Alert  } from 'react-native';
import { TextInputMask, TextMask  } from 'react-native-masked-text'

const typePerson = [
  {
    label: 'Seleccione tipo de persona',
    value: "null",
  },
  {
    label: 'Soy persona natural',
    value: 'pn',
  },
  {
    label: 'Soy persona juridica',
    value: 'pj',
  }
];

const typeSell = [
  {
    label: 'Seleccione tipo de venta',
    value: "null",
  },
  {
    label: 'Venta',
    value: '1',
  },
  {
    label: 'Venta con hipoteca',
    value: '2',
  },
  {
    label: 'Hipoteca',
    value: '3',
  },
  {
    label: 'Cancelación hipoteca',
    value: '4',
  }
];


export default class NotaryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      typeP: '',
      typeSe: '',
      sellPropertyValue: ''
    };
  }


    _onPressLearnMore = async () => {
      let typeSell = this.state.typeSe;    
      this.setState({typeSe: typeSell});
      let typePerson = this.state.typeP;    
      this.setState({typeP: typePerson});
      const unmaskedseelValue = this.state.sellPropertyValue.getRawValue();
      
      
      if(typeSell != "" && typePerson != "" && unmaskedseelValue != NaN){
        this.setState({typeP: typePerson});
        this.setState({typeSe: typeSell});
        this.setState({sellPropertyValue: unmaskedseelValue});
        console.warn(typeSell + " holaaa " + typePerson + " " + unmaskedseelValue);
      }else{
        Alert.alert("DEBES SABER QUE","Es necesario ingresar todos los campos");
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
  
        <View>
          <Text style={styles.bigTitle}>Calculadora gastos de Escr</Text>
          <Text style={styles.info}>Los gastos de escrituración y registro son la suma que se debe cancelar por la compra o venta de un bien inmueble. Hay unos gastos que se deben cancelar en la notaría, y otros que se pagan en la oficina de instrumentos públicos.</Text>
          <Text style={styles.bigTitle}>Seleccione el tipo de venta y persona</Text>    
        </View>
          <View>
              <Picker
                    style={{height: 50, width: '100%'}}
                    selectedValue={this.state.typeSe}
                    onValueChange={itemValue => {
                    this.setState({
                      typeSe: itemValue
                    })
                    }}>       
                    {typeSell.map((i, index) => (
                      <Picker.Item key={index} label={i.label} value={i.value} />
                    ))}
                    
              </Picker>
        
          </View>

          <View>

              <Picker
                style={{height: 50, width: '100%'}}
                selectedValue={this.state.typeP}
                 onValueChange={itemValueP => {
                this.setState({
                  typeP: itemValueP
                })
                }}>   
                {typePerson.map((i, index) => (
                  <Picker.Item key={index} label={i.label} value={i.value} />
                ))}
              </Picker>

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
              value={this.state.sellPropertyValue}
              ref={(refsellPropertyValue) => this.state.sellPropertyValue = refsellPropertyValue}
              onChangeText={textSell => {
              this.setState({
                sellPropertyValue: textSell
              })
              }}
              id="sellPropertyValue"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Ingrese el valor de venta"
              keyboardType={'numeric'}                            
            />

          </View>

          <Button
              onPress={this._onPressLearnMore}
              title="¡Calcular ahora!"
              color="#841584"
              accessibilityLabel="Presiona para calcular los gastos de escrituración"
            />
       
          <Text style={styles.info}>Tipo de venta: {this.state.typeSe}</Text>
          <Text style={styles.info}>Tipo de persona: {this.state.typeP}</Text>
          <View style={styles.commissionStyle}>
              <Text style={styles.commissionLabel}>Valor de la venta: </Text>
              <TextMask
              style={styles.commissionLabelV}
              value={this.state.sellPropertyValue}
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

