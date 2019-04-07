import React from 'react'
import './SearchButton.scss'

const SearchButton = (props) => {
  let buttonClass = '';
  if (props.buttonClass === 'filter') {
    buttonClass = 'search-button';
  }

  return (
    <div>
      <button className={buttonClass}>{props.buttonText}</button>
    </div>
  )
}

export default SearchButton
