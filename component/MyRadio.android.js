import React, { Component } from 'react';
import {
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


class MyRadio extends Component {

  constructor(props){
    super(props);
    this.state = {
      value:0,
      radio_props:[
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
      ]
    }
  }

  render(){
    return (
      <View>
        <Text>Android radio button</Text>
        <RadioForm
          radio_props={this.state.radio_props}
          initial={this.state.value}
          formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
    )
  }
}
export default MyRadio
