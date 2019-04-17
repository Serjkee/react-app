import { connect } from 'react-redux'
import {changingSearchByValue} from '../../../redux/filters/filters.actions'
import SearchFilters from './SearchFilters'

const mapStateToProps = (state) =>({searchValue: state.searchValue})
const mapDispatchToProps = (dispatch) =>({
  changingByValue(e) {
    dispatch(changingSearchByValue(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters)