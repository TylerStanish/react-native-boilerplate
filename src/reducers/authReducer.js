import * as Types from '../actions/Types'


const initialState = {
  loggedIn: false
}

export default (state=initialState, action) => {
  switch(action.type){
    case Types.LOGIN:
      return {
        ...state,
        loggedIn: true
      }
    case Types.LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    default: return state
  }
}