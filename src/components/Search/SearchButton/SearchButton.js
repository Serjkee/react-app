import React from 'react'
import {connect} from 'react-redux'
import {buttonClick} from '../../../actions/actionCreators'

import './SearchButton.scss'

const SearchButton = (props) => {
  let buttonClass = '';
  if (props.buttonClass === 'filter') {
    buttonClass = 'search-button';
  }

  return (
    <div>
      <button className={buttonClass} onClick={props.changingBtnText} >{props.btnText}</button>
    </div>
  )
}

const mapStateToProps = (state) => ({btnText: state.btnText})
const mapDispatchToProps = (dispatch) => ({
  changingBtnText() {
    dispatch(buttonClick('Ogo'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton)
