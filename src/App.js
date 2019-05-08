import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import queryString from 'query-string'


import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'
import './App.scss';
import Header from './containers/Header/Header.hoc'
import SortingSection from './containers/SortingSection/SortingSection'
import Cards from './containers/Cards/Cards.hoc'
import Footer from './containers/Footer/Footer'
import NoFilmsFound from './components/NoFilmsFound/NoFilmsFound'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { connect } from 'react-redux';

import {asyncHandlingSubmitFormAction} from './redux/movies/movies.actions'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    const {search, searchBy, sortBy} = values
    this.props.showApiData(search, searchBy, sortBy);
  }
  

  render() {
    let MainPage = () => <><Header /><><SortingSection moviesFound={this.props.apiData.length}/><Cards /></><Footer /></>;
    let Movies = () => <><Header /><><SortingSection moviesFound={this.props.apiData.length}/><Cards /></><Footer /></>;
    let NoFilmsFound = () => <NoFilmsFound />

    return (
      <ErrorBoundary>
        <div className='app-wrapper'>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path="/movies/:id" component={Movies} />
            <Route path="/movies" component={Movies} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => ({apiData: state.movies.apiData});
const mapDispatchToProps = (dispatch) => ({
  showApiData(searchText, searchBy, sortBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy));
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))