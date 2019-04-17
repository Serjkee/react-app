import React from 'react'

import './SearchFilters.scss'
import './Filter/Filter.scss'
import Filter from './Filter/Filter'

const SearchFilters = (props) => {
  return (
    <div className='search-filters'>
      <p>
        Search by
      </p>
      <Filter inputId='title' inputClass='main-filter' onCustomChange={props.changingByValue} inputName='search' inputType='radio' inputValue='title' inputText='Title' checkedByDefault />
      <Filter inputId='genres' inputClass='main-filter' onCustomChange={props.changingByValue} inputName='search' inputType='radio' inputValue='genres' inputText='Genres' />
    </div>
  )
}

export default SearchFilters
