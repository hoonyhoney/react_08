/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View, Text,Button,StyleSheet, TouchableOpacity,ScrollView,TextInput,Image} from 'react-native';
import PropsChild from './propsChild';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Steak from './assets/images/steak.jpg';
import Modal from './src/modal';

class App extends Component {

  state = {
        myTextInput: '',
        alphabet : ['a', 'b','c','d']
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput : event
        })
    }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return{
        myTextInput : '',
        alphabet : [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return(
      <View style={styles.mainView}>
        <Modal></Modal>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    backgroundColor: 'white',
    marginTop: 50,
    alignItems : 'center',
    // justifyContent: 'center'
  },
  subView :{
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex:2,
    backgroundColor: 'yellow',
    marginBottom : 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10

},
image: {
  width: '100%',
  height:700
  
}
},
)


export default App;
