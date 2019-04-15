import axios from 'axios';

import {
  CHANGING_SEARCH_INPUT_VALUE, 
  CHANGING_SEARCH_BY_VALUE, 
  SUBMIT_SEARCH_FORM,
  SHOWING_ONE_CARD_CONTENT,
  SHOWING_SEARCH_FILTER_CONTENT } from './actionTypes'

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

export const submitSearchForm = (data, sortBy) => {
  return {
    type: SUBMIT_SEARCH_FORM,
    payload: {data: data, sort: sortBy},
  }
}
export const asyncHandlingSubmitFormAction = (searchText, searchBy, sortBy) => {
  let url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=20`;
  console.log(url)
  return (dispatch) => {
    axios
    .get(url)
    .then(res => dispatch(submitSearchForm(res.data.data, sortBy)))
    .catch(err => console.error(err))
  }
}

export const showingOneCardContent = (oneCardContent) => {
  return {
    type: SHOWING_ONE_CARD_CONTENT,
    payload: oneCardContent
  }
}

export const showingSearchFilterContent = () => {
  return {
    type: SHOWING_SEARCH_FILTER_CONTENT
  }
}