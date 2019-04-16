import React, { Component } from 'react'

import CardItem from '../../components/CardSection/CardItem'
import './Cards.scss'
import { connect } from 'react-redux';
import {showingOneCardContent} from '../../redux/movies/movies.actions'

export class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let pageContent = this.props.apiData.map( content => <CardItem key={content.id} 
      movieId={content.id}
      onCustomClick={this.props.addingContentToOneCardComponent} 
      imgSrc={content.poster_path} 
      movieVote={content.vote_average} 
      movieName={content.title} 
      movieAge={content.release_date.slice(0, 4)} 
      movieGenre={content.genres.join(', ')}></CardItem>)

    return (
      <div className='card-wrapper'>
        {pageContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({apiData: state.movies.apiData})
const mapDispatchToProps = (dispatch) => ({
  addingContentToOneCardComponent(e) {
    dispatch(showingOneCardContent(e))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
