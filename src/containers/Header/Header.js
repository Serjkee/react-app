import React, { Component } from 'react'

import './Header.scss'
import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
import NetflixLogo from '../../components/NetflixLogo/NetflixLogo'
import Search from '../../components/Search/Search'
import OneCardFilm from '../../components/OneFilmCard/OneFilmCard'
import {connect} from 'react-redux'

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.oneCardData)
    let oneCardHeaderContent = this.props.oneCardShowed ? 
    <OneCardFilm 
    cardImgPath={this.props.oneCardData.poster_path} 
    cardTitle={this.props.oneCardData.title}
    cardGenres={this.props.oneCardData.genres.join(', ')}
    cardReleaseDate={this.props.oneCardData.release_date.slice(0, 4)}
    cardRuntime={this.props.oneCardData.runtime}
    cardFilmOverview={this.props.oneCardData.overview} /> : <><FindYourMovie /><Search /></>

    return (
      <div className='header-image'>
        <div className='header'>
          <NetflixLogo />
          {oneCardHeaderContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({oneCardShowed: state.search.oneCardShowed, oneCardData: state.search.oneCardData[0]})

export default connect(mapStateToProps)(Header)
