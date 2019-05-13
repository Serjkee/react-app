import {
  CHANGING_SEARCH_TEXT_VALUE, 
  CHANGING_SEARCH_BY_VALUE,
  CHANGING_SORT_BY_VALUE
} from './filters.constants'

const initState = {
  searchValue: '',
  searchBy: 'title',
  sortBy: 'release_date'
}

const handilngSearchInputChange = ( state, action ) => {
  return Object.assign({}, state, {searchValue: action.payload})
}

const handilngSortInputChange = ( state, action ) => {
  return Object.assign({}, state, {sortBy: action.payload})
}

const handlingSearchByChange = (state, action) => {
  return Object.assign({}, state, {searchBy: action.payload})
}

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGING_SEARCH_TEXT_VALUE:
      return handilngSearchInputChange(state, action);
    case CHANGING_SEARCH_BY_VALUE:
      return handlingSearchByChange(state, action);
    case CHANGING_SORT_BY_VALUE:
      return handilngSortInputChange(state, action);
    default:
      return state;
  }
}

export default filterReducer;