import React from 'react'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'

import Actions from '../actions'

class LoggedInScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>The user is now logged in</Text>
        <Button title='Click to logout' onPress={() => this.props.logout()}/>
      </View>
    )
  }
}

export default connect(null, {logout: Actions.auth.logout})(LoggedInScreen)