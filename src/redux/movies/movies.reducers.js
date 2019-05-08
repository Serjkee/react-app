import {
  SUBMIT_SEARCH_FORM } from './movies.constants'

const initState = {
  apiData: []
};

const handlingFormSubmit = (state, action) => {
  return Object.assign({}, state, {sortBy: action.payload.sort, apiData: [...action.payload.data]})
}

const searchReducer = (state = initState, action) => {
  switch(action.type) {
    case SUBMIT_SEARCH_FORM:
      return handlingFormSubmit(state, action);
    default:
      return state;
  }
}

export default searchReducer;