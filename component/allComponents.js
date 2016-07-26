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

  constructor(props){
    super(props);
    this.state = {page:'second'};
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
        </Tabs>
        { this.state.page === 'first' &&
        <View>
          <ScrollView style={{flex: 1, flexDirection: 'column', width:300}}>
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
        </View>
        }
        { this.state.page !== 'first' &&
          <Text style={{width:300}}>{this.state.page}</Text>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
