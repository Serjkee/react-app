import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


import './Header.scss'
import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
import NetflixLogo from '../../components/NetflixLogo/NetflixLogo'
import Search from '../../components/Search/Search.hoc'
import OneCardFilm from '../../components/OneFilmCard/OneFilmCard'
import SearchButton from '../../components/Search/SearchButton/SearchButton'

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let withButtonLogo = <><NetflixLogo /><SearchButton onCustomSubmit={this.props.showSearchFilter} buttonClass='backToFilter' ><Link to='/' >Search</Link></ SearchButton></>;
    let oneCardHeaderContent = <OneCardFilm 
    cardImgPath={this.props.oneCardData.poster_path} 
    cardTitle={this.props.oneCardData.title}
    cardGenres={this.props.oneCardData.genres.join(', ')}
    cardReleaseDate={this.props.oneCardData.release_date.slice(0, 4)}
    cardRuntime={this.props.oneCardData.runtime}
    cardFilmOverview={this.props.oneCardData.overview} /> 

    let withoutMovie = () => (<div className='header'>
      <div className='logo-header'>
        <NetflixLogo />
      </div>
        <><FindYourMovie /><Search /></>
      </div>)

    let withMovie = () => (<div className='header'>
      <div className='logo-header'>
        {withButtonLogo}
      </div>
      {oneCardHeaderContent}
      </div>)

    console.log(this.props)

    return (
      <div className='header-image'>
        <Route exact path={['/', '/movies']} component={withoutMovie} />
        <Route path='/movies/:id' component={withMovie} />
      </div>
    )
  }
}

export default Header
