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
    let pageContent = this.props.apiData.map( content => <CardItem key={content.id} imgSrc={content.poster_path} movieName={content.title} movieAge={content.release_date.slice(0, 4)} movieGenre={content.genres.join(', ')}></CardItem>)

    return (
      <div className='card-wrapper'>
        {pageContent}
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
