import {
  SUBMIT_SEARCH_FORM,
  SHOWING_ONE_CARD_CONTENT,
  SHOWING_SEARCH_FILTER_CONTENT } from './movies.constants'

const initState = {
  apiData: [],
  oneCardShowed: false,
  oneCardData: []
};

const handlingFormSubmit = (state, action) => {
  console.log(action)
  return Object.assign({}, state, {sortBy: action.payload.sort, apiData: [...action.payload.data]})
}

const handlingVisibilityOneCardContent = (state, action) => {
  let oneCardContent = state.apiData.slice().filter(card => card.id === action.payload);
  return Object.assign({}, state, {oneCardShowed: true, oneCardData: oneCardContent})
}

const handlingSearchFilterVisibility = (state, action) => {
  return Object.assign({}, state, {oneCardShowed: false})
}

const searchReducer = (state = initState, action) => {
  switch(action.type) {
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