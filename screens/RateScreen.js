import React from 'react';
import { AppRegistry, ActivityIndicator, View, ScrollView, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';



export default class RateScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      titleText: "TASAS DE INTERÉS ACTIVAS CRÉDITO DE VIVIENDA",
      searchTerm: '',
      isLoading: true, // check if json data (online) is fetching
      dataSource: [], // store an object of json data
      dataSourceComplete: [],
      error: null,    
    };
    this.dataSource = [];
    this.searchFilterFunction = this.searchFilterFunction.bind(this);
  }



  searchFilterFunction = text => {    
    const CompleteData = this.state.dataSourceComplete;
    const newData = this.state.dataSource.filter(item => {      
      const itemData = `${item.sigla.toUpperCase()}`;
      const itemDataComplete = this.state.dataSourceComplete;
       const textData = text.toUpperCase();
       const exist = itemData.indexOf(textData); 
      return itemData.indexOf(textData) > -1; 
      
       
         
    });    
    //this.setState({ dataSource: newData }); 
    this.setState({
      isLoading: false, // already no loading
      dataSource: newData
    });
    //console.log(this.state.dataSource);
     
  }; 

  componentDidMount() {
   
    return fetch("https://www.datos.gov.co/resource/kq52-uq9b.json")
          .then((response) => response.json())
          .then((responseJson) => {
            // set state value
            this.setState({
              isLoading: false, // already loading
              dataSource: responseJson,
              dataSourceComplete: responseJson,
            });

            
            
          })
          .catch((error) => {
            console.warn(error);
          });

          //this.searchFilterFunction();
  }

  render() {


  if(this.state.isLoading) {
    return(
      <View style={{flex: 1, padding: 20, color: '#ffffff', backgroundColor: '#333333'}}>
        <ActivityIndicator/>
      </View>
    )
  }
     
    return (

      <View style={styles.container}>
        <Text style={styles.bigTitle}>
          {this.state.titleText}
        </Text>

        <Text style={styles.smallTitle}>
          Son las tasas de interés activas cobradas por los establecimientos de crédito en los préstamos de vivienda. 
        </Text>

        <Text style={styles.tinyTitle}>
          La información se actualiza de Datos Abiertos Colombia.
        </Text>

        <SearchInput 
          onChangeText={text => this.searchFilterFunction(text)}
          style={styles.searchInput}
          placeholder="Escriba una palabra clave a buscar"
        />

        <ScrollView style={styles.container}>
        <View style={styles.containerInner}>



          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.info}>{item.sigla} is {item.modalidad_de_credito} years old. {item.tipo_entidad == "male" ? "He" : "She"} likes {item.valor}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          />


 

     
      
          </View>
        </ScrollView>               
      </View> 
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
  containerInner: {
    paddingBottom: 40
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgb(254, 160, 79)',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
  },
  bigTitleChapter: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
    paddingTop: 20,
  },
   bigSubTitleChapter: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
    marginBottom:25,
  },
  smallTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#ffffff',
    marginTop: 6,
    marginBottom: 6,
    fontFamily: "Roboto-Thin",
  },
  info: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#ffffff',
  },
  emailItem:{
    paddingTop: 10,
    paddingBottom: 5,
    color: 'rgba(255,255,255,1)',
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  emailSubject: {
    color: '#ffffff',
    fontFamily: "Roboto-Thin",
    fontSize: 15,
    textAlign: 'justify',
  },
  searchInput:{
    padding: 10,
    borderColor: '#333333',
    borderWidth: 1,
    fontFamily: "Roboto-Thin",
    textAlign: 'center',
    marginTop: 15,
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
  textNotes: {
    color: 'rgba(255,255,255,.5)',
    marginBottom:5,
    marginTop:5,
    fontSize: 10,
    textAlign: 'center',
  },
  tinyTitle: {
    color: 'rgba(255,255,255,.5)',
    marginBottom:5,
    marginTop:5,
    fontSize: 10,
    textAlign: 'center',
  },
  wordHightLigther: {
    backgroundColor: 'yellow',
  }
 
});

