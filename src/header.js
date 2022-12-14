/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {View, Text,Button, Image,StyleSheet,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';


 const Header = (props) => (
    <TouchableOpacity 
        style={styles.header}
        onPressOut={()=>alert('hello world')}
    >
           <View style={styles.header}>
             <Text >{props.name}</Text>
           </View>
       </TouchableOpacity>
 )
 const styles = StyleSheet.create({
   header: {
     backgroundColor: 'pink',
     padding: 5,
     alignItems : 'center',
     width:'100%'
   },
 })
 
 
 export default Header;
 