import {connect} from 'react-redux'
import { createSelector } from 'reselect'
// eslint-disable-next-line import/no-named-as-default
import Header from './Header'

const sortSelector = createSelector(
  state => state.filters.sortBy,
  (sortBy) => sortBy
)

const searchBySelector = createSelector(
  state => state.filters.searchBy,
  (searchBy) => searchBy
)

const valueSelector = createSelector(
  state => state.filters.searchValue,
  (searchValue) => searchValue
)

const dataSelector = createSelector(
  state => state.movies.apiData,
  (apiData) => apiData
)

const mapStateToProps = (state) => ({
  apiData: dataSelector(state), 
  sortBy: sortSelector(state), 
  searchValue: valueSelector(state), 
  searchBy: searchBySelector(state)})

export default connect(mapStateToProps)(Header)