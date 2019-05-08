import { connect } from 'react-redux';
import Cards from './Cards'

const mapStateToProps = (state) => ({apiData: state.movies.apiData})

export default connect(mapStateToProps)(Cards)