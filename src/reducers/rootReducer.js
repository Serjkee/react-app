import {CLICKY} from '../actions/actionTypes'

const initialState = {btnText: 'Neveroyatno'};
 
const handilngButtonClick = ( state, action ) => {
  return Object.assign({}, state, {btnText: action.text})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CLICKY:
      console.log(`clicked and ${action.text}`)
      return handilngButtonClick(state, action);
    default:
      return state;
  }
}

export default reducer;