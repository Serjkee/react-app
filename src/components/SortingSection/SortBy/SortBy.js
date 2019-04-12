import React from 'react'

import './SortBy.scss'
import Filter from '../../Search/SearchFilters/Filter/Filter'
import { connect } from 'react-redux';
import {changingSortValue} from '../../../actions/actionCreators'

const SortBy = (props) => {
  return (
    <div className='sort-filters'>
      <p>
        Sort by
      </p>
      <Filter inputId='release' onCustomChange={props.changingSortBy} inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='release' inputText='release date' checkedByDefault />
      <Filter inputId='rating' onCustomChange={props.changingSortBy} inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='rating' inputText='rating' />
    </div>
  )
}

const mapStateToProps = (state) => ({sortBy: state.sortBy})
const mapDispatchToProps = (dispatch) => ({
  changingSortBy(e) {
    dispatch(changingSortValue(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)
