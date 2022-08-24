/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View, Text,Button, Image,StyleSheet, TouchableOpacity,ScrollView,TextInput} from 'react-native';
import PropsChild from './propsChild';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {

  onAddTextInput = () => {
    alert('I want to add TextInput')
  }

  render() {
    return(
      <View style={styles.mainView}>
         <TextInput
             value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={100}
            />
         <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
          >
          </Button> 
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
    padding: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10

}
},
)


export default App;
