import React from 'react'

import './CardItem.scss'

const CardItem = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.imgSrc} />
      </div>
      <div className='card-description'>
        <p className='card-film-name' >{props.movieName}<span className='card-year'>{props.movieAge}</span></p>
        <p className='card-genre'>{props.movieGenre}</p>
      </div>
    </div>
  )
}

export default CardItem
