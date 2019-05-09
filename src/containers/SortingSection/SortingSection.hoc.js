import {connect} from 'react-redux'
import SortingSection from './SortingSection'

import React, { Component } from 'react'

class SortingSectionHOC extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <SortingSection moviesFound={this.props.apiData.length} {...this.props} />
  }
}


const mapStateToProps = (state) => ({apiData: state.movies.apiData})

export default connect(mapStateToProps)(SortingSectionHOC)