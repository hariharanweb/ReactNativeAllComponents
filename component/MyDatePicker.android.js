import React, { Component } from 'react';
import {
  Text,
  View,
  SegmentedControlIOS,
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableWithoutFeedback
} from 'react-native';

class MyDatePicker extends Component {

  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  async showTimePicker(stateKey, options) {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = _formatTime(hour, minute);
        newState[stateKey + 'Hour'] = hour;
        newState[stateKey + 'Minute'] = minute;
      } else if (action === TimePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render() {
    return (
      <View>
        <Text>DatePicker</Text>
        <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'simple', {date: new Date()})}>
            <View>
              <Text>Show Date picker</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            onPress={this.showTimePicker.bind(this, 'simple1', {})}>
            <View>
              <Text>Show Pick Time</Text>
            </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

export default MyDatePicker
