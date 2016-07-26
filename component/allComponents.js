import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Picker,
  Switch
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import MyRadio from './MyRadio';
import MyDatePicker from './MyDatePicker';

class AllComponents extends Component {

  render() {
    return (
      <ScrollableTabView tabBarPosition='bottom'>
        <ScrollView style={{flex: 1, flexDirection: 'column', width:300}} tabLabel='firstLabel'>
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
        <View tabLabel='secondLabel'>
          <Text>Second tab</Text>
        </View>
      </ScrollableTabView>
    );
  }
}

export default AllComponents;
