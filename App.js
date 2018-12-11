import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'readux'
import ReduxThunk from 'redux-thunk'
import {createSwitchNavigator} from 'react-navigation'

import LoginScreen from './src/screens/LoginScreen'
import LoggedInScreen from './src/screens/LoggedInScreen'
import reducers from './src/reducers'
import NavigationService from './src/NavigationService'

export let store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

const AuthenticationContainer = createSwitchNavigator({
  SignedIn: {
    screen: LoggedInScreen
  },
  SignedOut: {
    screen: LoginScreen
  }
}, {
  initialRouteName: 'SignedIn'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} style={{flex: 1}}>
        <AuthenticationContainer ref={ref => NavigationService.setRootNavigator(ref)}/>
      </Provider>
    )
  }
}
