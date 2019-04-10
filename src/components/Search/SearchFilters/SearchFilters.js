import React from 'react'
import { connect } from 'react-redux'
import {changingSearchByValue} from '../../../actions/actionCreators'

import './SearchFilters.scss'
import './Filter/Filter.scss'
import Filter from './Filter/Filter'

const SearchFiltes = (props) => {
  return (
    <div className='search-filters'>
      <p>
        Search by
      </p>
      <Filter inputId='title' inputClass='main-filter' onCustomChange={props.changingByValue} inputName='search' inputType='radio' inputValue='title' inputText='Title' checkedByDefault />
      <Filter inputId='director' inputClass='main-filter' onCustomChange={props.changingByValue} inputName='search' inputType='radio' inputValue='director' inputText='Director' />
    </div>
  )
}

const mapStateToProps = (state) =>({searchValue: state.searchValue})
const mapDispatchToProps = (dispatch) =>({
  changingByValue(e) {
    dispatch(changingSearchByValue(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFiltes)
