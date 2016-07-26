import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Picker
} from 'react-native';
import MyRadio from './MyRadio'
import MyDatePicker from './MyDatePicker'

class AllComponents extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: 'column', width:300}}>
        <Text>Text field:</Text>
        <Text>
        Hello World
        </Text>
        <Text>Radio Button:</Text>
        <MyRadio />
        <MyDatePicker />
        <Picker
          selectedValue='key1'>
          <Picker.Item label="hello" value="key0" />
          <Picker.Item label="world" value="key1" />
        </Picker>
      </ScrollView>
    );
  }
}

export default AllComponents;
