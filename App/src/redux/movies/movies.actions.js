import axios from 'axios';

import {
  SUBMIT_SEARCH_FORM } from './movies.constants'

export const submitSearchForm = (data) => {
  return {
    type: SUBMIT_SEARCH_FORM,
    payload: {data: data},
  }
}
export const asyncHandlingSubmitFormAction = (searchText, searchBy, sortBy) => {
  let url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=20`;
  return (dispatch) => {
    axios
    .get(url)
    .then(res => dispatch(submitSearchForm(res.data.data)))
    .catch(err => err)
  }
}
