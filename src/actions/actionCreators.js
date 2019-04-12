import axios from 'axios';

import {
  CHANGING_SEARCH_INPUT_VALUE, 
  CHANGING_SEARCH_BY_VALUE, 
  SUBMIT_SEARCH_FORM,
  CHANGING_SORT_VALUE } from './actionTypes'

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

export const submitSearchForm = (data) => {
  return {
    type: SUBMIT_SEARCH_FORM,
    payload: data
  }
}
export const asyncHandlingSubmitFormAction = (searchText, searchBy, sortBy) => {
  let url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=20`;
  console.log(url)
  return (dispatch) => {
    axios
    .get(url)
    .then(res => dispatch(submitSearchForm(res.data.data)))
    .catch(err => console.error(err))
  }
}

export const changingSortValue = (sortValue) => {
  return {
    type: CHANGING_SORT_VALUE,
    payload: sortValue
  }
}