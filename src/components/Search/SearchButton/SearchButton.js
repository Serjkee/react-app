import React from 'react'

import './SearchButton.scss'

const SearchButton = (props) => {
  let buttonClass = '';
  if (props.buttonClass === 'filter') {
    buttonClass = 'search-button';
  }

  return (
    <div>
      <button className={buttonClass} onClick={props.changingBtnText} onClick={props.onCustomSubmit} >{props.buttonText}</button>
    </div>
  )
}

export default SearchButton;
