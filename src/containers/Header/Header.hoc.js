import {showingSearchFilterContent} from '../../redux/movies/movies.actions'
import {connect} from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => ({oneCardShowed: state.movies.oneCardShowed, oneCardData: state.movies.oneCardData[0]})
const mapDispatchToProps = (dispatch) => ({
  showSearchFilter() {
    dispatch(showingSearchFilterContent());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)