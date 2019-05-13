import React from 'react'
import { Link } from 'react-router-dom'

import './PageNotFound.scss'

export default function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h1>Page not found</h1>
      <p>Seems like page doesn't exists. Try to find some information on <Link to='/'>Homepage</Link> or write a ticket in support.</p>
    </div>
  )
}
