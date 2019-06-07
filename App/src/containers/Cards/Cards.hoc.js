import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import queryString  from 'query-string'
import React, { Component } from 'react'

import {Cards} from './Cards'
// import NoFilmsFound from '../../components/NoFilmsFound/NoFilmsFound'

import {asyncHandlingSubmitFormAction} from '../../redux/movies/movies.actions'

class CardsHOC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noFilms: null
    }
  }

  componentDidMount() {
    import('../../components/NoFilmsFound/NoFilmsFound').then((mod) => this.setState({noFilms: mod.default()}))
    const values = queryString.parse(this.props.location.search)
    if (values.limit) {
      const {search, searchBy, sortBy} = values
      this.props.showApiData(search, searchBy, sortBy);
    }
  }

  render() {
    return this.props.apiData.length === 0 ? this.state.noFilms : <Cards {...this.props}/>
  }
}


const mapStateToProps = (state) => ({apiData: state.movies.apiData})
const mapDispatchToProps = (dispatch) => ({
  showApiData(searchText, searchBy, sortBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy));
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardsHOC))