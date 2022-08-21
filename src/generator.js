/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {View, Text,Button,StyleSheet} from 'react-native';


 const Generator = (props) => {
    return(
        <View style={styles.generator}>
            <Button
                title="Add Number"
                onPress = {()=> props.add()}
            />

        </View>
    )
 }
 
 const styles = StyleSheet.create({
    generator : {
        backgroundColor : '#D197CF',
        alignItems : 'center',
        padding: 5,
        width: '100%'
    }
 })
 
 export default Generator;
 