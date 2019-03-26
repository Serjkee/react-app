import React, { Component } from 'react'

import './Header.scss'
import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
import NetflixLogo from '../../components/NetflixLogo/NetflixLogo'
import Search from '../../components/Search/Search'

export class Header extends Component {
  render() {
    return (
      <div className='header-image'>
        <div className='header'>
          <NetflixLogo />
          <FindYourMovie />
          <Search />
        </div>
      </div>
    )
  }
}

export default Header
