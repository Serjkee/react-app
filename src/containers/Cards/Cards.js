import React, { Component } from 'react'

import CardItem from '../../components/CardSection/CardItem'
import './Cards.scss'
import { connect } from 'react-redux';
import {asyncHandlingSubmitFormAction} from '../../actions/actionCreators'

export class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.apiData)

    return (
      <div className='card-wrapper'>
        <CardItem imgSrc='src/assets/images/pulp.jpg' movieName='Pulp Fiction' movieAge='2004' movieGenre='Crime' />
        <CardItem imgSrc='src/assets/images/pulp.jpg' movieName='Fun Fiction' movieAge='2014' movieGenre='Comedy' />
        <CardItem imgSrc='src/assets/images/pulp.jpg' movieName='Crime Fiction' movieAge='2024' movieGenre='Drama' />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({apiData: state.search.apiData})
const mapDispatchToProps = (dispatch) => ({
  gettingApiData() {
    dispatch(asyncHandlingSubmitFormAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
