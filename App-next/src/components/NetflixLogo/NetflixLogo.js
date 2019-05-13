import React from 'react'
import { Link } from 'react-router-dom'

import './NetflixLogo.scss'

const NetflixLogo = () => {
  return (
    <p className='netflix-logo'>
      <Link to='/' >netflixroulette</Link>
    </p>
  )
}

export default NetflixLogo
