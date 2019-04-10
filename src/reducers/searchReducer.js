import {CHANGING_SEARCH_INPUT_VALUE, CHANGING_SEARCH_BY_VALUE} from '../actions/actionTypes'

const initialState = {
  searchValue: '',
  searchBy: 'title'
};
 
const handilngSearchInputChange = ( state, action ) => {
  return Object.assign({}, state, {searchValue: action.payload})
}

const handlingSearchByChange = (state, action) => {
  return Object.assign({}, state, {searchBy: action.payload})
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGING_SEARCH_INPUT_VALUE:
      return handilngSearchInputChange(state, action);
    case CHANGING_SEARCH_BY_VALUE:
      return handlingSearchByChange(state, action);
    default:
      return state;
  }
}

export default searchReducer;