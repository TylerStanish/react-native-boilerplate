import Types from './Types';

export const setData = () => {
  return async dispatch => {
    // some async action here
    dispatch({type: Types.SET_DATA});
  }
}