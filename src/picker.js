/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {View, Text,Button, Image,StyleSheet, TextInput} from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import Slider from '@react-native-community/slider';
 
 class PickerComponent extends Component {
    state = {
        country: 'korea'
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    style={{height:40, width: 300}}
                />
                <Picker
                    style={{height: 50, width: 250}}
                    selectedValue={this.state.country}
                    onValueChange={(val,idx) => 
                        this.setState({country: val})
                        }
                >
                    <Picker.Item label="korea" value="korea"/>
                    <Picker.Time label="canada" value="canada"/>

                </Picker>
            </View>
        )
    }
 }
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center'
    }
 })
 
 
 export default PickerComponent;
 