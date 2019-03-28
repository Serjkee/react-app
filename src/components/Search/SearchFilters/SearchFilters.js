import React from 'react'

import './SearchFilters.scss'
import './Filter/Filter.scss'
import Filter from './Filter/Filter'

const SearchFiltes = () => {
  return (
    <div className='search-filters'>
      <p>
        Search by
      </p>
      <Filter inputId='title' inputClass='main-filter' inputName='search' inputType='radio' inputValue='TITLE' inputText='Title' checkedByDefault />
      <Filter inputId='director' inputClass='main-filter' inputName='search' inputType='radio' inputValue='DIRECTOR' inputText='Director' />
    </div>
  )
}

export default SearchFiltes
