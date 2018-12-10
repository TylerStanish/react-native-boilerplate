import * as Types from '../actions/Types';


const initialState = {
  data: []
};

export default (state=initialState, action) => {
  switch(action.type){
    case Types.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default: return state;
  }
}