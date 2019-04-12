import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changingSearchInputValue, asyncHandlingSubmitFormAction} from '../../actions/actionCreators'

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
        <SearchInput placeholder='Example: Quentin Tarantino' inputClass='search' passingValue={this.props.searchValue} onCustomChange={this.props.changingInputValue} />
        <div className='header-filters' >
          <SearchFilters />
          <SearchButton buttonText='Search' buttonClass='filter' onCustomSubmit={() => this.props.onSubmitForm(this.props.searchValue, this.props.searchBy)} />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({searchValue: state.search.searchValue, searchBy: state.search.searchBy})
const mapDispatchToProps = (dispatch) => ({
  changingInputValue(e) {
    dispatch(changingSearchInputValue(e.target.value))
  },
  onSubmitForm(searchText, searchBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy));
  }
})

export default  connect(mapStateToProps, mapDispatchToProps)(Search)
