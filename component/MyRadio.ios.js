import React, { Component } from 'react';
import {
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';


class MyRadio extends Component {
  render(){
    return (
      <View>
        <Text>iOS Native radio button</Text>
        <SegmentedControlIOS
          values={['One', 'Two']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
      </View>
    )
  }
}

export default MyRadio
