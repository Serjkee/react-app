import React, { Component } from 'react'

import MoviesFound from '../../components/SortingSection/MoviesFound/MoviesFound'
import SortBy from '../../components/SortingSection/SortBy/SortBy.hoc';
import './SortingSection.scss'

export class SortingSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='sorting-section-wrapper'>
        <div className='sorting-section'>
          <MoviesFound moviesFound={this.props.moviesFound}/>
          <SortBy />
        </div>
      </div>
    )
  }
}

export default SortingSection
