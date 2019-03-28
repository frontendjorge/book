import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import CommerceLaw from '../screens/CommerceTextComplete';
const KEYS_TO_FILTERS = ['article.name', 'article.text', 'title', 'chapter'];



export default class CommerceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      titleText: "CÓDIGO DE COMERCIO DECRETO 410 DE 1971",
      searchTerm: ''
    };
  }


    _onPressLearnMore = async () => {
    }

    searchUpdated(term) {
      this.setState({ searchTerm: term })
    }

  

  render() {

  const filteredLaw = CommerceLaw.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    
    return (

      <View style={styles.container}>
        <Text style={styles.bigTitle}>
          {this.state.titleText}
        </Text>

        <Text style={styles.smallTitle}>
          El código de comercio sólo esta disponible online. Si desea consultarlo haga clic en el siguiente enlace el cual redireccionará a un sitio web externo.
        </Text>

                     
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
    color: 'yellow',
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

