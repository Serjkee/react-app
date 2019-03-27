import React from 'react'

import './SortBy.scss'

const SortBy = () => {
  return (
    <div className='sort-filters'>
      <p>
        Sort by
      </p>
      <input id='release' name='sort' type='radio' value='RELEASE' defaultChecked /><label htmlFor='release'>release date</label>
      <input id='rating' name='sort' type='radio' value='RATING' /><label htmlFor='rating'>rating</label>
    </div>
  )
}

export default SortBy
