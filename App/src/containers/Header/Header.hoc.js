import {connect} from 'react-redux'
// eslint-disable-next-line import/no-named-as-default
import Header from './Header'

const mapStateToProps = (state) => ({
  apiData: state.movies.apiData, 
  sortBy: state.filters.sortBy, 
  searchValue: state.filters.searchValue, 
  searchBy: state.filters.searchBy})

export default connect(mapStateToProps)(Header)