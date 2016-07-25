import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { RadioButtons } from 'react-native-radio-buttons'

class AllComponents extends Component {
  render() {
    const options = [
    "Option 1",
    "Option 2"
    ];

    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold'} : {};

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }

    return (
      <View>
        <Text>
        Hello World
        </Text>
        <RadioButtons
        options={ options }
        renderOption={ renderOption }
        renderContainer={ renderContainer }
        />

      </View>
    );
  }
}

export default AllComponents;
