import * as actions from '../actions/actionCreators'
import * as types from '../actions/actionTypes'

describe('testing all the actions', () => {
  it('create an action to change input value', () => {
    const value = 'batman'
    const expectedAction = {
      type: types.CHANGING_SEARCH_INPUT_VALUE,
      payload: value
    }
    expect(actions.changingSearchInputValue(value)).toEqual(expectedAction)
  })

  it('create an action to change search by radio value', () => {
    const value = 'genres'
    const expectedAction = {
      type: types.CHANGING_SEARCH_BY_VALUE,
      payload: value
    }
    expect(actions.changingSearchByValue(value)).toEqual(expectedAction)
  })

  it('create an action to submit form', () => {
    const data = [{data: '123'}, {data: '234234'}]
    const expectedAction = {
      type: types.SUBMIT_SEARCH_FORM,
      payload: data
    }
    expect(actions.submitSearchForm(data)).toEqual(expectedAction)
  })

  it('create an action to change sort by radio value', () => {
    const value = 'rating'
    const expectedAction = {
      type: types.CHANGING_SORT_VALUE,
      payload: value
    }
    expect(actions.changingSortValue(value)).toEqual(expectedAction)
  })

  it('create an action to show one card', () => {
    const data = [{data: '123'}]
    const expectedAction = {
      type: types.SHOWING_ONE_CARD_CONTENT,
      payload: data
    }
    expect(actions.showingOneCardContent(data)).toEqual(expectedAction)
  })

  it('create an action to show search form', () => {
    const expectedAction = {
      type: types.SHOWING_SEARCH_FILTER_CONTENT
    }
    expect(actions.showingSearchFilterContent()).toEqual(expectedAction)
  })
})