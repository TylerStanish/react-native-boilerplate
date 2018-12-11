import {NavigationActions} from 'react-navigation'

let _navigator;

export function setRootNavigator(navigator){
  _navigator = navigator;
}

export function navigate(route, params){
  _navigator.dispatch(NavigationActions.navigate({routeName: route, params}))
}

