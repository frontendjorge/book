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
      sellRte: 0,
      sellNotaryFees: 0,
      sellNotaryTaxes: 0,
      sellCharityTaxes: 0,
      sellRegisterTaxes: 0,
      copies: 70000,
      certificates: 18000,
      totalNotaryFees: 0,
      totalRegisterFees: 0,
      totalToPay: 0,
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    };
  }

  
  onChangeText = async (key, val) => {
    //this.setState({ [key]: val});
    const unmaskedseelValue = this.state.sellPropertyValue.getRawValue();
    //console.warn(unmaskedseelValue);
    const rteValue = unmaskedseelValue * 1 /100;
    const NotaryFees = unmaskedseelValue * 0.3 /100;
    const NotaryFeesTaxes = NotaryFees * 19 /100;
    const CharityFeesTaxes = unmaskedseelValue * 1 /100;
    const registerTaxes = unmaskedseelValue * 0.5 /100;
    const unmaskedseelValueCopies = this.state.copies;
    const unmaskedseelValueCertificates = this.state.certificates;
    const NotaryFeesTotal = rteValue + NotaryFees + NotaryFeesTaxes + unmaskedseelValueCopies;
    const RegisterFeesTotal = CharityFeesTaxes + registerTaxes + unmaskedseelValueCertificates;
    const toPay = NotaryFeesTotal + RegisterFeesTotal;
    //console.warn(RegisterFeesTotal);

    this.setState({
      sellPropertyValue: val,
      sellRte: rteValue,
      sellNotaryFees: NotaryFees,
      sellNotaryTaxes: NotaryFeesTaxes,
      sellCharityTaxes: CharityFeesTaxes,
      sellRegisterTaxes: registerTaxes,
      totalNotaryFees: NotaryFeesTotal,
      totalRegisterFees: RegisterFeesTotal,
      totalToPay: toPay
    });
    
  }


 
    

    componentDidMount() {
      
    }

  render() {
    
    const data = [
      {
          key: 1,
          amount: this.state.sellRte,
          label: 'Retención en la fuente',
          svg: { fill: '#004d4d' },
          arc: { cornerRadius: 5  }
      },
      {
          key: 2,
          amount: this.state.sellNotaryFees,
          label: 'Gastos notariales',
          svg: { fill: '#008080' },
          arc: { cornerRadius: 5  }
      },
      {
          key: 3,
          amount: this.state.sellNotaryTaxes,
          label: 'IVA',
          svg: { fill: '#00b3b3' },
          arc: { cornerRadius: 5  }
      },
      {
          key: 4,
          amount: this.state.copies,
          label: 'Copias**',
          svg: { fill: '#4B8893' },
          arc: { cornerRadius: 5  }
      },
      {
          key: 5,
          amount: this.state.sellCharityTaxes,
          label: 'Impuesto de beneficencia',      
          svg: { fill: '#6EA0A9' },
          arc: { cornerRadius: 5  }
      },
      {
        key: 6,
        amount: this.state.sellRegisterTaxes,
        label: 'Impuesto de registro*',
        svg: { fill: '#93B8BF' },
        arc: { cornerRadius: 5  }
      },
     {
      key: 7,
      amount: this.state.certificates,
      label: 'Certificados de libertad',
      svg: { fill: '#B7D0D3' },
      arc: { cornerRadius: 5  }
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
          <Text style={styles.bigTitle}>SIMULADOR GASTOS ESCRITURACIÓN Y REGISTRO</Text>
          <Text style={styles.smallTitle}>Los gastos de escrituración y registro son la suma que se debe cancelar por la compra o venta de un bien inmueble. Hay unos gastos que se deben cancelar en la notaría, y otros que se pagan en la oficina de instrumentos públicos.</Text>
            
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
              
            </PieChart>

        </View> 

        <View style={styles.totalStyle}>
            <Text style={styles.totalTitleStyle}>VALOR TOTAL</Text>
            <Text style={styles.totalValueStyle}>
            <TextMask
              style={styles.totalTopay}
              value={this.state.totalToPay}
              type={'money'}
              options={{
                  precision: 0,
                  separator: ',',
                  delimiter: '.',
                  unit: '$',
                  suffixUnit: ''
                }}
              />
            </Text>
            <Text style={styles.totalTitleStyle}>ESCRITURACIÓN</Text>
        </View>

          <View style={styles.commissionStyle}>
            <View></View>
            <View></View>
          </View>

          <View style={styles.centerLegendsData}>

            <View style={styles.commissionStyle}>
                <Text style={styles.iconRte}></Text>
                <Text style={styles.commissionLabel}>Retención en la fuente: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.sellRte}
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
                <Text style={styles.iconNotaryfees}></Text>
                <Text style={styles.commissionLabel}>Gastos Notariales: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.sellNotaryFees}
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
                <Text style={styles.iconNotaryTaxes}></Text>
                <Text style={styles.commissionLabel}>IVA Gastos Notariales: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.sellNotaryTaxes}
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
                <Text style={styles.iconCopies}></Text>
                <Text style={styles.commissionLabel}>**Copias: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.copies}
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
                <Text style={styles.iconCharity}></Text>
                <Text style={styles.commissionLabel}>Impuesto de beneficencia: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.sellCharityTaxes}
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
                <Text style={styles.iconRegisterTaxes}></Text>
                <Text style={styles.commissionLabel}>*Impuesto de registro: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.sellRegisterTaxes}
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
                <Text style={styles.iconCertificates}></Text>
                <Text style={styles.commissionLabel}>Certificados de libertad: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.certificates}
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
                <Text style={styles.commissionLabel}>Total derechos notariales: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.totalNotaryFees}
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
                <Text style={styles.commissionLabel}>Total gastos de registro: </Text>
                <TextMask
                style={styles.commissionLabelV}
                value={this.state.totalRegisterFees}
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
    color: 'rgb(254, 160, 79)',
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
  iconRte: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#004d4d',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  iconNotaryfees: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#008080',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  iconNotaryTaxes: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#00b3b3',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  iconCopies: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#4B8893',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  iconCharity: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#6EA0A9',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  iconRegisterTaxes: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#93B8BF',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
  },
  iconCertificates: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#282B33',
    borderColor: '#B7D0D3',
    borderWidth: 3,
    borderStyle: 'dashed',
    marginTop: 5,
    marginRight: 15,
    marginBottom:10,
    marginLeft: 15,
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
    paddingTop:280,
  },
  totalStyle: {
    flex: 1,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    marginTop:-160,
    marginBottom: 115,
    textAlign: 'center',
    width: '100%',
  },
  totalTitleStyle: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    marginTop:0,
    textAlign: 'center',
  },
  totalValueStyle: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    marginTop:0,
    textAlign: 'center',
  },
  totalTopay: {
    fontSize: 16,
    color: 'rgb(254, 160, 79)',
    fontFamily: "Roboto-Bold",
    marginTop:0,
    textAlign: 'center',
  },
  centerLegendsData: {
    width: '90%',
    justifyContent:'center',
    marginBottom:20,
  }

});
