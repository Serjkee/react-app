import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'
import './App.scss';
import Header from './containers/Header/Header.hoc'
import SortingSection from './containers/SortingSection/SortingSection'
import Cards from './containers/Cards/Cards.hoc'
import Footer from './containers/Footer/Footer'
import NoFilmsFound from './components/NoFilmsFound/NoFilmsFound'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props)
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
            <Route component={PageNotFound} />
            {/* <Route path="/movies/:id" component={SingleMovies} /> */}
          </Switch>
        </div>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => ({apiData: state.movies.apiData});

export default connect(mapStateToProps)(App)