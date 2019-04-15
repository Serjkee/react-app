import {
  CHANGING_SEARCH_INPUT_VALUE, 
  CHANGING_SEARCH_BY_VALUE,
  SUBMIT_SEARCH_FORM,
  SHOWING_ONE_CARD_CONTENT,
  SHOWING_SEARCH_FILTER_CONTENT } from '../actions/actionTypes'

const initialState = {
  searchValue: '',
  searchBy: 'title',
  sortBy: 'release_date',
  apiData: [],
  oneCardShowed: false,
  oneCardData: []
};
 
const handilngSearchInputChange = ( state, action ) => {
  return Object.assign({}, state, {searchValue: action.payload})
}

const handlingSearchByChange = (state, action) => {
  return Object.assign({}, state, {searchBy: action.payload})
}

const handlingFormSubmit = (state, action) => {
  return Object.assign({}, state, {sortBy: action.payload.sort, apiData: [...action.payload.data]})
}

const handlingVisibilityOneCardContent = (state, action) => {
  let oneCardContent = state.apiData.slice().filter(card => card.id === action.payload);
  return Object.assign({}, state, {oneCardShowed: true, oneCardData: oneCardContent})
}

const handlingSearchFilterVisibility = (state, action) => {
  return Object.assign({}, state, {oneCardShowed: false})
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGING_SEARCH_INPUT_VALUE:
      return handilngSearchInputChange(state, action);
    case CHANGING_SEARCH_BY_VALUE:
      return handlingSearchByChange(state, action);
    case SUBMIT_SEARCH_FORM:
      return handlingFormSubmit(state, action);
    case SHOWING_ONE_CARD_CONTENT:
      return handlingVisibilityOneCardContent(state, action);
    case SHOWING_SEARCH_FILTER_CONTENT:
      return handlingSearchFilterVisibility(state, action);
    default:
      return state;
  }
}

export default searchReducer;