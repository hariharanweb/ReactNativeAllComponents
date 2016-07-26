import React, { Component } from 'react';
import {
  Text,
  View,
  DatePickerIOS
} from 'react-native';


class MyRadio extends Component {
  render(){
    return (
      <View>
        <Text>iOS Native date picker</Text>
        <DatePickerIOS
          date={new Date()}
          mode="date"
          onDateChange={() => {}}
        />
      </View>
    )
  }
}
export default MyRadio
