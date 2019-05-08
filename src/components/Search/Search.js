import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import SearchInput from './SearchInput/SearchInput'
import SearchButton from './SearchButton/SearchButton'
import SearchFilters from './SearchFilters/SearchFilters.hoc'
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
        <SearchInput placeholder='Example: Quentin Tarantino' inputClass='search' passingValue={this.props.searchValue} onCustomChange={this.props.changingInputValue} />
        <div className='header-filters' >
          <SearchFilters />
          <SearchButton buttonClass='filter' onCustomSubmit={() => this.props.onSubmitForm(this.props.searchValue, this.props.searchBy, this.props.sortBy)} ><Link to='#'>Search</Link></SearchButton>
        </div>
      </form>
    )
  }
}

export default Search
