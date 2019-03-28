import React from 'react'
import './SearchInput.scss'

const SearchInput = (props) => {
  let inputClass = '';
  if (props.inputClass === 'search') {
    inputClass = 'search-input';
  } 

  return (
    <div>
      <input className={inputClass} placeholder={props.placeholder} />
    </div>
  )
}

export default SearchInput
