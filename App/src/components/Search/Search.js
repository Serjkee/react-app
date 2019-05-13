import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


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
        <SearchInput placeholder='Example: Quentin Tarantino' inputClass='search' passingValue={this.props.searchValue} searchValue={this.props.searchValue} onCustomChange={this.props.changingInputValue} />
        <div className='header-filters' >
          <SearchFilters />
          <Link to={{pathname: `/movies`, search: `?search=${this.props.searchValue}&searchBy=${this.props.searchBy}&sortBy=${this.props.sortBy}&sortOrder=desc&limit=20`}}><SearchButton buttonClass='filter' onCustomSubmit={() => this.props.onSubmitForm(this.props.searchValue, this.props.searchBy, this.props.sortBy)} >Search</SearchButton></Link>
        </div>
      </form>
    )
  }
}

export default withRouter(Search)
