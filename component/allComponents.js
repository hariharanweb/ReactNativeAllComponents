import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import MyRadio from './MyRadio'

class AllComponents extends Component {

  render() {
    return (
      <View>
        <Text>Text field:</Text>
        <Text>
        Hello World
        </Text>
        <Text>Radio Button:</Text>
        <MyRadio />
      </View>
    );
  }
}

export default AllComponents;
