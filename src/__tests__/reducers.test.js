import searchReducer from '../reducers/searchReducer'
import * as types from '../actions/actionTypes'

describe('testing reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'release_date',
      apiData: [],
      oneCardShowed: false,
      oneCardData: []
    }, {})).toEqual(
      {
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [],
        oneCardShowed: false,
        oneCardData: []
      }
    )
  })

  it('should handle CHANGING_SEARCH_INPUT_VALUE', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [],
        oneCardShowed: false,
        oneCardData: []
      }, {
        type: types.CHANGING_SEARCH_INPUT_VALUE,
        payload: 'Batman'
      })
    ).toEqual({
      searchValue: 'Batman',
      searchBy: 'title',
      sortBy: 'release_date',
      apiData: [],
      oneCardShowed: false,
      oneCardData: []
    })
  })

  it('should handle CHANGING_SEARCH_BY_VALUE', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [],
        oneCardShowed: false,
        oneCardData: []
      }, {
        type: types.CHANGING_SEARCH_BY_VALUE,
        payload: 'genres'
      })
    ).toEqual({
      searchValue: '',
      searchBy: 'genres',
      sortBy: 'release_date',
      apiData: [],
      oneCardShowed: false,
      oneCardData: []
    })
  })

  it('should handle SUBMIT_SEARCH_FORM', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [],
        oneCardShowed: false,
        oneCardData: []
      }, {
        type: types.SUBMIT_SEARCH_FORM,
        payload: [{data: '123123'}, {data: '324234'}, {data: '23343434'}]
      })
    ).toEqual({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'release_date',
      apiData: [{data: '123123'}, {data: '324234'}, {data: '23343434'}],
      oneCardShowed: false,
      oneCardData: []
    })
  })

  it('should handle CHANGING_SORT_VALUE', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [],
        oneCardShowed: false,
        oneCardData: []
      }, {
        type: types.CHANGING_SORT_VALUE,
        payload: 'rating'
      })
    ).toEqual({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'rating',
      apiData: [],
      oneCardShowed: false,
      oneCardData: []
    })
  })

  it('should handle SHOWING_ONE_CARD_CONTENT', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [{id: '123123'}, {id: '324234'}, {id: '23343434'}],
        oneCardShowed: false,
        oneCardData: []
      }, {
        type: types.SHOWING_ONE_CARD_CONTENT,
        payload: '324234'
      })
    ).toEqual({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'release_date',
      apiData: [{id: '123123'}, {id: '324234'}, {id: '23343434'}],
      oneCardShowed: true,
      oneCardData: [{id: '324234'}]
    })
  })

  it('should handle SHOWING_SEARCH_FILTER_CONTENT', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        apiData: [],
        oneCardShowed: true,
        oneCardData: []
      }, {
        type: types.SHOWING_SEARCH_FILTER_CONTENT
      })
    ).toEqual({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'release_date',
      apiData: [],
      oneCardShowed: false,
      oneCardData: []
    })
  })
})