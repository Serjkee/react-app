import React from 'react'

import './CardItem.scss'

const CardItem = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.imgSrc} />
      </div>
      <div className='card-description'>
        <div className='card-film-name' >
          <p className='card-film-title'>{props.movieName}</p>
          <span className='card-vote'>{props.movieVote}</span>
          <span className='card-year'>{props.movieAge}</span>
        </div>
        <p className='card-genre'>{props.movieGenre}</p>
      </div>
    </div>
  )
}

export default CardItem
