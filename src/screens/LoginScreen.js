import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Button
} from 'react-native-elements'
import {connect} from 'react-redux'

import Actions from '../actions'
import NavigationService from '../NavigationService'

class LoginScreen extends React.Component{

  componentWillReceiveProps(nextProps){
    if(!this.props.loggedIn && nextProps.loggedIn){
      NavigationService.navigate('SignedIn')
    }
  }

  render(){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello from the login screen</Text>
        <Button title='Click to login' onPress={() => this.props.login()}/>
      </View>
    );
  }
}

export default connect(state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}, {login: Actions.auth.login})(LoginScreen)