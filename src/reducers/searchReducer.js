import {
  CHANGING_SEARCH_INPUT_VALUE, 
  CHANGING_SEARCH_BY_VALUE,
  SUBMIT_SEARCH_FORM,
  CHANGING_SORT_VALUE } from '../actions/actionTypes'

const initialState = {
  searchValue: '',
  searchBy: 'title',
  sortBy: 'release_date',
  apiData: []
};
 
const handilngSearchInputChange = ( state, action ) => {
  return Object.assign({}, state, {searchValue: action.payload})
}

const handlingSearchByChange = (state, action) => {
  return Object.assign({}, state, {searchBy: action.payload})
}

const handlingFormSubmit = (state, action) => {
  return Object.assign({}, state, {apiData: [...action.payload]})
}

const handlingSortChanges = (state, action) => {
  let copiedApiDataObj = state.apiData.slice();
  let sortedContent = copiedApiDataObj.sort((item1, item2) => {
    if (action.payload === 'release_date') {
      return item2.release_date.slice(0, 4) - item1.release_date.slice(0, 4);
    } else if (action.payload === 'vote_average') {
      return item2.vote_average - item1.vote_average;
    }
  })
  console.log(sortedContent)
  return Object.assign({}, state, {sortBy: action.payload, apiData: sortedContent})
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGING_SEARCH_INPUT_VALUE:
      return handilngSearchInputChange(state, action);
    case CHANGING_SEARCH_BY_VALUE:
      return handlingSearchByChange(state, action);
    case SUBMIT_SEARCH_FORM:
      return handlingFormSubmit(state, action);
    case CHANGING_SORT_VALUE:
      return handlingSortChanges(state, action);
    default:
      return state;
  }
}

export default searchReducer;