import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'readux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';

export let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} style={{flex: 1}}>

      </Provider>
    );
  }
}
