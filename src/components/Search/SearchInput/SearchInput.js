import React from 'react'
import {connect} from 'react-redux'
import {changingSearchInputValue} from '../../../actions/actionCreators'

import './SearchInput.scss'

const SearchInput = (props) => {
  let inputClass = '';
  if (props.inputClass === 'search') {
    inputClass = 'search-input';
  } 

  return (
    <div>
      <input className={inputClass} placeholder={props.placeholder} value={props.searchValue} onChange={props.changingInputValue} />
    </div>
  )
}

const mapStateToProps = (state) => ({searchValue: state.searchValue})
const mapDispatchToProps = (dispatch) => ({
  changingInputValue(e) {
    dispatch(changingSearchInputValue(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
