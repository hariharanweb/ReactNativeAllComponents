import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import MyRadio from './MyRadio'
import MyDatePicker from './MyDatePicker'

class AllComponents extends Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', width:300}}>
        <Text>Text field:</Text>
        <Text>
        Hello World
        </Text>
        <Text>Radio Button:</Text>
        <MyRadio />
        <MyDatePicker />
      </View>
    );
  }
}

export default AllComponents;
