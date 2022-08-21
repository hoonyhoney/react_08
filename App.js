/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View, Text,Button, Image,StyleSheet, TouchableOpacity} from 'react-native';
import PropsChild from './propsChild';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';

class App extends Component {

  state = {
    appName: 'My First App',
    random : [36,999]
  }

  onAddRandomNum = () => {
    alert('add random number')
  }

  render() {
    return(
      <View style={styles.mainView}>
         <Header name={this.state.appName}/>

        <View>
          <Text
            style = {styles.mainText}
            onPress={()=> alert('text touch event')}
            >Hellow world
            </Text>
        </View>

        
         
          <Generator add={this.onAddRandomNum}/>
          <NumList/>
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
    justifyContent: 'center'
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
  }
},
)


export default App;
