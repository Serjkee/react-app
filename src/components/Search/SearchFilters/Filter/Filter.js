import React from 'react'

import './Filter.scss'

function Filter(props) {
  return (
    <>
      <input id={props.inputId} className={props.inputClass} onChange={props.onCustomChange} name={props.inputName} type={props.inputType} value={props.inputValue} defaultChecked={props.checkedByDefault} /><label htmlFor={props.inputId}>{props.inputText}</label>
    </>
  )
}

export default Filter
