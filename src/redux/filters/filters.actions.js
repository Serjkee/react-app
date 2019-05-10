import {
  CHANGING_SEARCH_TEXT_VALUE, 
  CHANGING_SEARCH_BY_VALUE,
  CHANGING_SORT_BY_VALUE
} from './filters.constants'

export const changingSearchInputValue = (inputValue) => {
  return {
    type: CHANGING_SEARCH_TEXT_VALUE,
    payload: inputValue
  }
}

export const changingSearchByValue = (searchByValue) => {
  return {
    type: CHANGING_SEARCH_BY_VALUE,
    payload: searchByValue
  }
}

export const changingSortByValue = (sortByValue) => {
  return {
    type: CHANGING_SORT_BY_VALUE,
    payload: sortByValue
  }
}