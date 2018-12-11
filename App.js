import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'

import LoginScreen from './src/screens/LoginScreen'
import LoggedInScreen from './src/screens/LoggedInScreen'
import reducers from './src/reducers'
import NavigationService from './src/NavigationService'

export let store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

const AuthenticationNavigator = createSwitchNavigator({
  SignedIn: {
    screen: LoggedInScreen
  },
  SignedOut: {
    screen: LoginScreen
  }
}, {
  initialRouteName: 'SignedOut'
})
const WrapperNavigator = createAppContainer(AuthenticationNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} style={{flex: 1}}>
        <WrapperNavigator ref={ref => NavigationService.setRootNavigator(ref)}/>
      </Provider>
    )
  }
}
