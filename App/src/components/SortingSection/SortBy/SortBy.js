import React from 'react'

import './SortBy.scss'
import Filter from '../../Search/SearchFilters/Filter/Filter'

const SortBy = (props) => {
  return (
    <div className='sort-filters'>
      <p>
        Sort by
      </p>
      <Filter 
        inputId='release' 
        onCustomChange={(e) => 
          (props.handilngSortInputChange(e.target.value), 
          props.changingSortBy(props.searchValue, props.searchBy, e.target.value))} 
        inputClass='secondary-filter' 
        inputName='sort' 
        inputType='radio' 
        inputValue='release_date' 
        inputText='release date' 
        checkedOption={props.sortBy === 'release_date' ? true : false} />
      <Filter 
        inputId='rating' 
        onCustomChange={(e) => 
          (props.handilngSortInputChange(e.target.value), 
          props.changingSortBy(props.searchValue, props.searchBy, e.target.value))} 
        inputClass='secondary-filter' 
        inputName='sort' 
        inputType='radio' 
        inputValue='vote_average' 
        inputText='rating' 
        checkedOption={props.sortBy === 'vote_average' ? true : false} />
    </div>
  )
}

export default SortBy
