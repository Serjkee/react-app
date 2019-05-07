import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'
import './App.scss';
import Header from './containers/Header/Header.hoc'
import SortingSection from './containers/SortingSection/SortingSection'
import Cards from './containers/Cards/Cards.hoc'
import Footer from './containers/Footer/Footer'
import NoFilmsFound from './components/NoFilmsFound/NoFilmsFound'
import PageDoesntExist from './components/404/404'
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let pageContent = this.props.apiData.length ?  <><SortingSection moviesFound={this.props.apiData.length}/> <Cards /></> : <NoFilmsFound />;
    let Content = () => (<div className='app-wrapper'>
    <Header />
    {pageContent}
    <Footer />
  </div>)

    return (
      <ErrorBoundary>
        <Switch>
          <Route exact path={['/', '/movies', '/movies/:id']} component={Content} />
          <Route component={PageDoesntExist} />
        </Switch>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => ({apiData: state.movies.apiData});

export default connect(mapStateToProps)(App)