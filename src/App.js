import React, { Component } from 'react'

import ErrorBoundary from './utility/ErrorBoundary/ErrorBoundary'
import './App.scss';
import Header from './containers/Header/Header'
import SortingSection from './containers/SortingSection/SortingSection'
import Cards from './containers/Cards/Cards'
import Footer from './containers/Footer/Footer'
import NoFilmsFound from './components/NoFilmsFound/NoFilmsFound'

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className='app-wrapper'>
          <Header />
          <SortingSection />
          {/* <NoFilmsFound /> */}
          <Cards />
          <Footer />
        </div>
      </ErrorBoundary>
    )
  }
}

export default App