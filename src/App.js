import React, { Component } from 'react'

import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'
import './App.scss';
import Header from './containers/Header/Header'
import SortingSection from './containers/SortingSection/SortingSection'
import Cards from './containers/Card/Card'
import Footer from './containers/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Header />
          <SortingSection />
          <Cards />
          <Footer />
        </div>
      </ErrorBoundary>
    )
  }
}

export default App