import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'

import Actions from '../actions'
import NavigationService from '../NavigationService'

export class LoggedInScreen extends React.Component{

  componentWillReceiveProps(nextProps){
    if(this.props.loggedIn && !nextProps.loggedIn){
      NavigationService.navigate('SignedOut')
    }
  }

  render(){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>The user is now logged in {this.props.loggedIn.toString()}</Text>
        <Button title='Click to logout' onPress={() => this.props.logout()}/>
      </View>
    )
  }
}

export default connect(state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}, {logout: Actions.auth.logout})(LoggedInScreen)