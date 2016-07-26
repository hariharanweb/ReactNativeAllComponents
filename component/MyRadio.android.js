import React, { Component } from 'react';
import {
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


class MyRadio extends Component {
  render(){
    var radio_props = [
      {label: 'param1', value: 0 },
      {label: 'param2', value: 1 }
    ];

    return (
      <View>
        <Text>Android radio button</Text>
        <RadioForm
          radio_props={radio_props}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
    )
  }
}
export default MyRadio
