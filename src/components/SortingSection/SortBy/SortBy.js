import React from 'react'

import './SortBy.scss'
import Filter from '../../Search/SearchFilters/Filter/Filter'

const SortBy = () => {
  return (
    <div className='sort-filters'>
      <p>
        Sort by
      </p>
      <Filter inputId='release' inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='RELEASE' inputText='release date' checkedByDefault />
      <Filter inputId='rating' inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='RATING' inputText='rating' />
    </div>
  )
}

export default SortBy
