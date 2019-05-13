import {connect} from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => ({apiData: state.movies.apiData, sortBy: state.filters.sortBy, searchValue: state.filters.searchValue, searchBy: state.filters.searchBy})

export default connect(mapStateToProps)(Header)