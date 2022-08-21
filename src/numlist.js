/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {View, Text,Button,StyleSheet} from 'react-native';


 const NumList = (props) => {
    return(
        <View style={styles.numList}>
            <Button
                title="Hello Again"
                
            />

        </View>
    )
 }
 
 const styles = StyleSheet.create({
    numList : {
        backgroundColor : '##cecece',
        alignItems : 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
 })
 
 export default NumList;
 