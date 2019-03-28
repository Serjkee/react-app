import React, { Component } from 'react'

import SearchInput from './SearchInput/SearchInput'
import SearchButton from './SearchButton/SearchButton'
import SearchFilters from './SearchFilters/SearchFilters'
import './Search.scss'

export class Search extends Component {
  render() {
    return (
      <form>
        <SearchInput placeholder='Example: Quentin Tarantino' inputClass='search' />
        <div className='header-filters' >
          <SearchFilters />
          <SearchButton buttonText='Search' buttonClass='filter' />
        </div>
      </form>
    )
  }
}

export default Search
