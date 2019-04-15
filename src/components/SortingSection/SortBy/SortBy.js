import React from 'react'

import './SortBy.scss'
import Filter from '../../Search/SearchFilters/Filter/Filter'
import { connect } from 'react-redux';
import {asyncHandlingSubmitFormAction} from '../../../actions/actionCreators'

const SortBy = (props) => {
  return (
    <div className='sort-filters'>
      <p>
        Sort by
      </p>
      <Filter inputId='release' onCustomChange={(e) => props.changingSortBy(props.searchValue, props.searchBy, e.target.value)} inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='release_date' inputText='release date' checkedByDefault />
      <Filter inputId='rating' onCustomChange={(e) => props.changingSortBy(props.searchValue, props.searchBy, e.target.value)} inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='vote_average' inputText='rating' />
    </div>
  )
}

const mapStateToProps = (state) => ({searchValue: state.search.searchValue, searchBy: state.search.searchBy, sortBy: state.search.sortBy})
const mapDispatchToProps = (dispatch) => ({
  changingSortBy(searchText, searchBy, sortBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)
