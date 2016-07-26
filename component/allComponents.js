import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Picker,
  Switch
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
        <Text>Picker:</Text>
        <Picker
          selectedValue='key1'>
          <Picker.Item label="hello" value="key0" />
          <Picker.Item label="world" value="key1" />
        </Picker>
        <Text>Checkbox/Switch: </Text>
        <Switch
          style={{marginBottom: 10}}
          value={true} />
      </ScrollView>
    );
  }
}

export default AllComponents;
