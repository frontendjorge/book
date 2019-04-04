import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Picker, Alert, Dimensions  } from 'react-native';
import { TextInputMask, TextMask  } from 'react-native-masked-text';
import { PieChart } from 'react-native-svg-charts';

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

const screenWidth = Dimensions.get('window').width;




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
      sellPropertyValue: '',
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    };
  }

  onChangeText = async (key, val) => {
    this.setState({ [key]: val});
    const unmaskedseelValue = this.state.sellPropertyValue.getRawValue();
    console.warn(unmaskedseelValue);
    
  }


 
    

    componentDidMount() {
      
    }

  render() {
    
    const data = [
      {
          key: 1,
          amount: 1000000,
          label: 'Retención en la fuente',
          svg: { fill: '#004d4d' },
      },
      {
          key: 2,
          amount: 500000,
          label: 'Gastos notariales',
          svg: { fill: '#008080' }
      },
      {
          key: 3,
          amount: 4000000,
          label: 'IVA',
          svg: { fill: '#00b3b3' }
      },
      {
          key: 4,
          amount: 180000,
          label: 'Copias**',
          svg: { fill: '#00e6e6' }
      },
      {
          key: 5,
          amount: 1450000,
          label: 'Impuesto de beneficencia',      
          svg: { fill: '#1affff' }
      },
      {
        key: 6,
        amount: 350000,
        label: 'Impuesto de registro*',
        svg: { fill: '#66ffff' }
      },
     {
      key: 7,
      amount: 180000,
      label: 'Certificados de libertad',
      svg: { fill: '#ccffff' }
      }
  ]

  const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
          const { labelCentroid, pieCentroid, data } = slice;
          return (
              
              <Text
                  key={index}
                  x={pieCentroid[ 0 ]}
                  y={pieCentroid[ 1 ]}
                  fill={'white'}
                  textAnchor={'middle'}
                  alignmentBaseline={'middle'}
                  fontSize={24}
                  stroke={'white'}
                  strokeWidth={0.2}
                  style={styles.legends}
              >

                  
                    {data.amount}
                    {data.label}
              </Text>
             
              
          )
      })
  }

    return (
      <ScrollView>
        
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

      <View style={styles.container}>
  
        <View>
          <Text style={styles.bigTitle}>Calculadora gastos de Escr</Text>
          <Text style={styles.smallTitle}>Los gastos de escrituración y registro son la suma que se debe cancelar por la compra o venta de un bien inmueble. Hay unos gastos que se deben cancelar en la notaría, y otros que se pagan en la oficina de instrumentos públicos.</Text>
            
        </View>
          

          <View>
          <Text style={styles.bigTitleSpecial}>Ingrese el valor de venta</Text>
          <TextInputMask
              type={'money'}
              options={{
                precision: 0,
                separator: ',',
                delimiter: '.',
                unit: '$',
                suffixUnit: ''
              }}
              placeholder="Ingrese el valor de venta"
              value={this.state.sellPropertyValue}
              ref={(refsellPropertyValue) => this.state.sellPropertyValue = refsellPropertyValue}
              onChangeText={textSell => this.onChangeText('sellPropertyValue', textSell)}
              id="sellPropertyValue"
              style={styles.searchInput}
              keyboardType={'numeric'}                            
            />

          </View>

          {/*<Text style={styles.info}>Tipo de venta: {this.state.typeSe}</Text>
          <Text style={styles.info}>Tipo de persona: {this.state.typeP}</Text>*/}

        <View style={{ justifyContent: 'center', paddingTop: 10, flex: 1, flexDirection: 'column' }}>

            <PieChart
                style={{ height: 260 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={10}
                outerRadius={'95%'}
            >
                 <Labels> </Labels>
            </PieChart>

        </View> 

          <View style={styles.commissionStyle}>
            <View></View>
            <View></View>
          </View>


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


           


        <View>
          <Text style={styles.smallTitleXS}>
          Los gastos notariales corresponden al valor de las escrituras, notariado y registro del inmueble, objeto de una compraventa. El vendedor y comprador pagan por partes iguales los derechos notariales. El impuesto de beneficencia está a cargo del comprador, la retención en la fuente y el impuesto de ganancia ocasional lo debe cancelar el vendedor.
          </Text>

          <Text style={styles.smallTitleXS}>
            *Los valores pueden variar de acuerdo al departamento por atribución de cada Asamblea Departamental.
          </Text>

          <Text style={styles.smallTitleXS}>
          **El valor de las copias corresponde a un promedio de comportamiento del mercado y depende de la cantidad de hojas de la escritura, lo que está sujeto a la cantidad de linderos, anotaciones, aclaraciones, y demás observaciones y parágrafos incluidos en la venta.
          </Text>

          <Text style={styles.smallTitleXS}>
          Los valores descritos aquí son informativos y apróximados. INMOOBI S.A.S no se hace responsable por variación en los mismos.
          </Text>
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
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#282B33',
    color: '#ffffff',
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'yellow',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
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
  commissionLabel: {
    width: '50%',
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Bold",
  },
  commissionLabelV: {
    width: '50%',
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
  },
  legends: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
  },
  legendsInner: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    marginTop:300
  },
  legendsContainer: {
    paddingTop:280,
  }

});

