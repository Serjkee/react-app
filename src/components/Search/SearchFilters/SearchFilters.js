import React from 'react'

import './SearchFilters.scss'

const SearchFiltes = () => {
  return (
    <div className='search-filters'>
      <p>
        Search by
      </p>
      <input id='title' name='search' type='radio' value='TITLE' defaultChecked /><label htmlFor='title'>Title</label>
      <input id='director' name='search' type='radio' value='DIRECTOR' /><label htmlFor='director'>Director</label>
    </div>
  )
}

export default SearchFiltes
