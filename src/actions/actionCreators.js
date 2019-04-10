import {CHANGING_SEARCH_INPUT_VALUE, CHANGING_SEARCH_BY_VALUE} from './actionTypes'

export const changingSearchInputValue = (inputValue) => {
  return {
    type: CHANGING_SEARCH_INPUT_VALUE,
    payload: inputValue
  }
}

export const changingSearchByValue = (searchByValue) => {
  return {
    type: CHANGING_SEARCH_BY_VALUE,
    payload: searchByValue
  }
}
