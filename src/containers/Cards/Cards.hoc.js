import { connect } from 'react-redux';
import {showingOneCardContent} from '../../redux/movies/movies.actions'
import Cards from './Cards'

const mapStateToProps = (state) => ({apiData: state.movies.apiData})
const mapDispatchToProps = (dispatch) => ({
  addingContentToOneCardComponent(e) {
    dispatch(showingOneCardContent(e))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)