import React from 'react'
import { Link } from 'react-router-dom'

import './404.scss'

export default function PageDoesntExist() {
  return (
    <div className='page-doesnt-exist'>
      <h1>Page doesnt exist</h1>
      Try to find some information on the <Link to='/'>homepage</Link>
    </div>
  )
}
