import React from 'react'

import './MoviesFound.scss'

const MoviesFound = (props) => {
  return (
    <p className='movies-found'>
      {props.moviesFound} movies found
    </p>
  )
}

export default MoviesFound
