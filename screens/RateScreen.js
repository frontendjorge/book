import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Moment from 'moment';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://www.datos.gov.co/resource/yvb2-ppaa.json`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        //console.warn(res);
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };



  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.nombreentidad.toUpperCase()} ${item.codigoentidad} ${item.nombre}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

 

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

   
   
    return (

      <View style={styles.container}>
        <SearchBar
        placeholder="Escriba la entidad bancaria..."
        darkTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
        
      />
      <Text style={styles.smallTitleXS}>Información actualizada de Datos Abiertos Colombia.</Text>
      <Text style={styles.smallTitleXS}>Puede buscar por nombre, código de banco o tipo de crédito.</Text>
        <ScrollView>
        <View style={styles.containerInner}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            //Moment.locale('es');
           
            var dt = item.fechacorte;
          
              if(item.nombre_sub === " "){
                item.nombre_sub = "No hay información"
              }

              return (
                <View style={styles.boxStyle}>
                  <View style={styles.legends}>
                    <Text style={styles.dataLabelStyle}>{item.nombreentidad} </Text>
                    <Text style={styles.dataDateStyle}>Fecha corte: {Moment(dt).format('D MMMM YYYY')} | Código entidad: {item.codigoentidad}</Text>
                    <Text style={styles.dataDateStyle}>MODALIDAD {item.tipo}</Text>
                    <Text style={styles.dataLabelLoanStyle}> {"TASA DE INTERÉS EFECTIVA ANUAL "+ item.tasaefectivaanual}</Text>
                    <Text style={styles.dataDateStyle}> > Tipo Adquisición: {item.nombre_sub}</Text>
                    
                  
                  </View>
                </View>
                )
              
            }
          
        }
          keyExtractor={(item, index) => index.toString()}
          //ListHeaderComponent={this.renderHeader}
        />
        </View>
        </ScrollView>
        
      </View>
      
      
    );
  }
}

export default FlatListDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#282B33',
    color: '#ffffff',
  },
  dataLabelStyle: {
    textAlign: 'left',
    fontSize: 16,
    width: '100%',
    fontFamily: "Roboto-Bold",
    flex: 1,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  dataLabelLoanStyle: {
    textAlign: 'left',
    fontSize: 12,
    width: '100%',
    fontFamily: "Roboto-Bold",
    flex: 1,
    color: 'rgb(254, 160, 79)',
    textTransform: 'uppercase',
    paddingTop:10,
    paddingBottom: 4,
  },
  dataDateStyle: {
    textAlign: 'left',
    fontSize: 11,
    width: '100%',
    fontFamily: "Roboto-Light",
    flex: 1,
    color: '#ffffff',
  },
  containerInner: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  boxStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#353A45",
    borderRadius: 6,
    marginBottom: 6,
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
    textAlign: 'left',
    fontSize: 13,
    color: '#cccccc',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 10,
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
    textAlign: 'center',
  },
  info: {
    textAlign: 'justify',
    fontSize: 16,
  },
  commissionStyle: {
    flex: 1, 
    flexDirection: 'row',
    color: "#ffffff",
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

