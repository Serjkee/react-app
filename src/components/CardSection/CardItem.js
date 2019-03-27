import React from 'react'

import './CardItem.scss'

const CardItem = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src='src/assets/images/pulp.jpg' />
      </div>
      <div className='card-description'>
        <p className='card-film-name' >Pulp Fiction<span className='card-year'>2004</span></p>
        <p className='card-genre'>Crime</p>
      </div>
    </div>
  )
}

export default CardItem
