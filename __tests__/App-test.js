import React from 'react'
import {
  Text
} from 'react-native'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {render} from 'react-native-testing-library'

import {LoggedInScreen} from '../src/screens/LoggedInScreen'
import {LoginScreen} from '../src/screens/LoginScreen'

const mockStore = configureStore([thunk])

describe('LoggedInScreen', () => {
  it('should match the last snapshot', () => {
    const props = {loggedIn: true}
    const tree = renderer.create(<LoggedInScreen {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('LoggedOutScreen', () => {
  it('should match the last snapshot', () => {
    const props = {loggedIn: false}
    const tree = renderer.create(<LoginScreen {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
