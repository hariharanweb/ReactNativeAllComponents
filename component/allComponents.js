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
import MyRadio from './MyRadio'
import MyDatePicker from './MyDatePicker'
import Tabs from 'react-native-tabs';

class AllComponents extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 'second' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
          selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props.name }) }>
          <Text name="first">TextField</Text>
          <Text name="second" selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Radio</Text>
          <Text name="third">Date Picker</Text>
          <Text name="fourth" selectedStyle={{ color: 'green' }}>Drop Down</Text>
          <Text name="fifth">Check box</Text>
        </Tabs>
        { this.state.page === 'first' &&
          <View>
            <Text>Text field: </Text>
            <Text>
              Hello World
            </Text>
          </View>
        }
        { this.state.page === 'second' &&
          <View>
            <Text>Radio Button: </Text>
            <MyRadio />
          </View>
        }
        { this.state.page === 'third' &&
          <MyDatePicker />
        }
        { this.state.page === 'fourth' &&
          <View>
            <Text>Picker: </Text>
            <Picker
              selectedValue='key1'>
              <Picker.Item label="hello" value="key0" />
              <Picker.Item label="world" value="key1" />
            </Picker>
          </View>
        }
        { this.state.page === 'fifth' &&
          <View>
            <Text>Checkbox/Switch: </Text>
            <Switch
              style={{ marginBottom: 10 }}
              value={true} />
          </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default AllComponents;
