import React, { Component } from 'react'

import CardItem from '../../components/CardSection/CardItem'
import './Cards.scss'

export class Cards extends Component {
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

export default Cards
