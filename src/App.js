import React, { Component } from 'react'

import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'
import './App.scss';
import Header from './containers/Header/Header'

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Header />
        </div>
      </ErrorBoundary>
    )
  }
}

export default App