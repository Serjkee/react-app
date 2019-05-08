import {connect} from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => ({apiData: state.movies.apiData})

export default connect(mapStateToProps)(Header)