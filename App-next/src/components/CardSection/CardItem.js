import React from 'react'
import Link from 'next/link'

import './CardItem.scss'

const CardItem = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <Link as={`/movies/masked/${props.movieId}`} href={`/movies/${props.movieId}`}><a><img src={props.imgSrc} /></a></Link>
      </div>
      <div className='card-description'>
        <div className='card-film-name' >
          <p className='card-film-title'><Link as={`/movies/masked/${props.movieId}`} href={`/movies/${props.movieId}`}><a>{props.movieName}</a></Link></p>
          <span className='card-vote'>{props.movieVote}</span>
          <span className='card-year'>{props.movieAge}</span>
        </div>
        <p className='card-genre'>{props.movieGenre}</p>
      </div>
    </div>
  )
}

export default CardItem
