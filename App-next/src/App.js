import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.scss';

import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'

import PageNotFound from './pages/PageNotFound/PageNotFound'
import Homepage from './pages/Homepage/Homepage'
import Movies from './pages/Movies/Movies'

import 'isomorphic-fetch';
import 'babel-polyfill';
import { hot } from 'react-hot-loader';

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ErrorBoundary>
        <div className='app-wrapper'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path={['/movies/:id', '/movies']} component={Movies} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </ErrorBoundary>
    )
  }
}

export default hot(module)(withRouter(App))