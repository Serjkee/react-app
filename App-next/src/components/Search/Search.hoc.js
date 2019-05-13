import {connect} from 'react-redux'
import {changingSearchInputValue} from '../../redux/filters/filters.actions'
import {asyncHandlingSubmitFormAction} from '../../redux/movies/movies.actions'
import Search from './Search'


const mapStateToProps = (state) => ({searchValue: state.filters.searchValue, searchBy: state.filters.searchBy, sortBy: state.filters.sortBy})
const mapDispatchToProps = (dispatch) => ({
  changingInputValue(e) {
    dispatch(changingSearchInputValue(e.target.value))
  },
  onSubmitForm(searchText, searchBy, sortBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy));
  }
})

export default  connect(mapStateToProps, mapDispatchToProps)(Search)