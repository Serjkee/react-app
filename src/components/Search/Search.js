import React, { Component } from 'react'

import SearchInput from './SearchInput/SearchInput'
import SearchButton from './SearchButton/SearchButton'
import SearchFilters from './SearchFilters/SearchFilters'
import './Search.scss'

export class Search extends Component {
  constructor(props) {
    super(props);
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
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
