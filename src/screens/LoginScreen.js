import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Button
} from 'react-native-elements'

export default class extends React.Component{
  render(){
    <View>
      <Text>Hello from the login screen</Text>
      <Button title='Click to login' onPress={() => this.props.login()}/>
    </View>
  }
}