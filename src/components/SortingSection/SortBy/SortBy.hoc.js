import { connect } from 'react-redux';
import {asyncHandlingSubmitFormAction} from '../../../redux/movies/movies.actions'
import SortBy from './SortBy'

const mapStateToProps = (state) => ({searchValue: state.filters.searchValue, searchBy: state.filters.searchBy, sortBy: state.filters.sortBy})
const mapDispatchToProps = (dispatch) => ({
  changingSortBy(searchText, searchBy, sortBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)