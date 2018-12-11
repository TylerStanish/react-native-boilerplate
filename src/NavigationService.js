import {NavigationActions} from 'react-navigation'

let _navigator;

function setRootNavigator(navigator){
  _navigator = navigator;
}

function navigate(route, params){
  _navigator.dispatch(NavigationActions.navigate({routeName: route, params}))
}

export default {
  setRootNavigator,
  navigate
}

