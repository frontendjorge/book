import React from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, Picker, Alert  } from 'react-native';
import Highlighter from 'react-native-highlight-words';





export default class HabitatScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      titleText: "LEY 820 DE 2003",
      subTitleText: 'Por la cual se expide el régimen de arrendamiento de vivienda urbana y se dictan otras disposiciones.'
    };
  }


    _onPressLearnMore = async () => {
     
 
    }

    componentDidMount() {
      
    }

  render() {

  
    
    return (
      <ScrollView style={styles.container}>

        

        <View>
          <Text style={styles.bigTitle}>
            {this.state.titleText}
          </Text>
           
            <Highlighter
            highlightStyle={{backgroundColor: 'yellow', color: '#000000', fontFamily: 'Roboto-Medium', fontSize:19}}
            searchWords={['and', 'or', 'the', 'expide']}
            textToHighlight={this.state.subTitleText}
            className="textComplete"
            style={styles.smallTitle}
            />
              <Text
                className="textComplete" 
                style={styles.smallTitle}
              >
                expide aja por el the andchoa
              </Text>
          
            
        </View>  
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#333333',
    color: '#ffffff',
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: "Roboto-Bold",
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
 
});

