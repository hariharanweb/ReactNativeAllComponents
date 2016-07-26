import React, { Component } from 'react';
import {
  Text,
  View,
  SegmentedControlIOS,
  DatePickerAndroid,
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

  render() {
    return (
      <View>
        <Text>DatePicker</Text>
        <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'simple', {date: new Date()})}>
            <View>
              <Text>Simple Date</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default MyDatePicker
