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
        <Text>iOS Native time picker</Text>
        <DatePickerIOS
          date={new Date()}
          mode="time"
          onDateChange={() => {}}
        />
      </View>
    )
  }
}
export default MyRadio
